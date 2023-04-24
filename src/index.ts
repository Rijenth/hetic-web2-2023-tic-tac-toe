export type Player = "X" | "O";

export type Cell = "_" | Player;

export type Grid = [[Cell, Cell, Cell], [Cell, Cell, Cell], [Cell, Cell, Cell]];

export type Coordinates = {
  x: 0 | 1 | 2;
  y: 0 | 1 | 2;
};

export type Action = {
  player: Player;
  coordinates: Coordinates;
};

export type Game = {
  grid: Grid;
  nextPlayer: Player;
};

const input = function (game: Game, action: Action): Game {
  if (game.grid[action.coordinates.x][action.coordinates.y] !== "_") {
    throw new Error("Cannot place a sign over an existing sign");
  }

  game.grid[action.coordinates.x][action.coordinates.y] = action.player;

  return {
    grid: game.grid,
    nextPlayer: action.player === "X" ? "O" : "X",
  };
};



export const computeNextGame = (game: Game, action: Action): Game => {
  const update_game = input(game, action);

  return {
    grid: update_game.grid,
    nextPlayer: action.player === "X" ? "O" : "X",
  };
};
