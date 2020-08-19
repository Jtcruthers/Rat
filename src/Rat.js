const SUITS = ["H", "S", "D", "C"];
const RANKS = [
  "2",
  /*
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
  */
];

const setup = (ctx) => {
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

  return {
    deck: initDeck(ctx),
    players: initPlayers(ctx),
    cardsPlayed: [],
    trumps: "H",
    numberOfCards: 3,
    hasPickedTrumps: true,
    roundLeaderPos: 0,
  };
};

export const Rat = {
  setup,

  turn: {
    moveLimit: 1,
  },

  moves: {},

  endIf: () => {},
};
