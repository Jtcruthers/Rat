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
  return Array(ctx.numPlayers).fill({
    hand: [],
    handsWon: 0,
    isStillIn: true,
  });
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

const playCard = (G, ctx, card) => {
  const player = G.players[ctx.currentPlayer];

  player.hand = player.hand.filter(
    (playerCard) =>
      playerCard.suit !== card.suit || playerCard.rank !== card.rank
  );

  G.cardsPlayed.push(card);
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
