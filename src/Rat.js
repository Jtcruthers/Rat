import { INVALID_MOVE } from "boardgame.io/core";

const SUITS = ["H", "S", "D", "C"];
const RANKS = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const initDeck = (ctx) => {
  let deck = [];
  SUITS.forEach((suit) => {
    RANKS.forEach((rank) => deck.push({ suit, rank }));
  });
  return ctx.random.Shuffle(deck);
};

const initPlayers = (ctx) => {
  return Array(ctx.numPlayers)
    .fill(null)
    .map((_, index) => ({
      hand: [],
      handsWon: 0,
      isStillIn: true,
      id: index.toString(),
    }));
};

const pickTrumps = (G, _, newTrumps) => {
  if (G.hasPickedTrumps) return INVALID_MOVE;

  G.trumps = newTrumps;
  G.hasPickedTrumps = true;
};

const dealToPlayers = (G, ctx) => {
  G.deck = initDeck(ctx);

  G.players.forEach((player) => (player.hand = []));
  const playersStillIn = G.players.filter((player) => player.isStillIn);
  for (let i = 0; i < G.numberOfCards; i++) {
    playersStillIn.forEach((player) => player.hand.push(G.deck.shift()));
  }

  G.hasDealtCards = true;
};

const determineRoundWinner = ({ cardsPlayed, trumps }) => {
  const trumpCards = cardsPlayed.filter((card) => card.suit == trumps);
  if (trumpCards.length === 1) return trumpCards[0].playedBy;

  let winningCardSet = trumpCards;
  if (trumpCards.length === 0) {
    // If no trump cards, then the starting suit is the only type of card that can win
    const startingSuit = cardsPlayed[0].suit;
    winningCardSet = cardsPlayed.filter((card) => card.suit === startingSuit);
  }

  const maxRankIndex = winningCardSet
    .map((card) => card.rank)
    .map((rank) => RANKS.indexOf(rank))
    .reduce(
      (maxIndex, rank, i, cardsPlayed) =>
        rank > cardsPlayed[maxIndex] ? i : maxIndex,
      0
    );

  const winningCard = winningCardSet[maxRankIndex];
  return winningCard.playedBy;
};

const playCard = (G, ctx, card) => {
  const player = G.players[ctx.currentPlayer];

  player.hand = player.hand.filter(
    (playerCard) =>
      playerCard.suit !== card.suit || playerCard.rank !== card.rank
  );

  G.cardsPlayed.push({ ...card, playedBy: ctx.currentPlayer });

  if (G.cardsPlayed.length === ctx.numPlayers) {
    const roundWinner = determineRoundWinner(G);
    G.players[roundWinner].handsWon++;
    G.cardsPlayed = [];
  }
};

export const Rat = {
  setup: (ctx) => ({
    deck: initDeck(ctx),
    players: initPlayers(ctx),
    cardsPlayed: [],
    trumps: "H",
    numberOfCards: 3,
    hasPickedTrumps: true,
    hasDealtCards: false,
    roundLeaderPos: 0,
  }),

  phases: {
    deal: {
      start: true,

      moves: {
        pickTrumps,
        dealToPlayers,
      },

      endIf: (G) => G.hasPickedTrumps && G.hasDealtCards,

      next: "play",
    },

    play: {
      moves: {
        playCard,
      },

      turn: {
        moveLimit: 1,
      },
    },
  },

  endIf: (G) => {
    const playersStillIn = G.players.filter((player) => player.isStillIn);
    if (playersStillIn.length > 1) return;

    // get playerStillIn id and return { winner: id }
  },
};
