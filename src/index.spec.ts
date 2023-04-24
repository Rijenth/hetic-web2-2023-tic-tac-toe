import { Action, Game, computeNextGame } from ".";

test("Start of the game", () => {
  // GIVEN
  const game: Game = {
    grid: [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ],
    nextPlayer: "X",
  };
  const action: Action = {
    player: "X",
    coordinates: {
      x: 0,
      y: 0,
    },
  };

  // WHEN
  const actual = computeNextGame(game, action);

  // THEN
  const expected: Game = {
    grid: [
      ["X", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ],
    nextPlayer: "O",
  };

  expect(actual).toEqual(expected);
});

test("Cannot place a sign over an existing sign", () => {
  const game: Game = {
    grid: [
      ["X", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ],
    nextPlayer: "O",
  };
  const action: Action = {
    player: "O",
    coordinates: {
      x: 0,
      y: 0,
    },
  };

  const actual = () => computeNextGame(game, action);

  const expected: Game = {
    grid: [
      ["X", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ],
    nextPlayer: "O",
  };

  expect(actual).toBe(expected);
});

test("Second round of the game", () => {
  const game: Game = {
    grid: [
      ["X", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ],
    nextPlayer: "O",
  };
  const action: Action = {
    player: "O",
    coordinates: {
      x: 0,
      y: 1,
    },
  };

  const actual = computeNextGame(game, action);

  const expected: Game = {
    grid: [
      ["X", "O", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ],
    nextPlayer: "X",
  };

  expect(actual).toEqual(expected);
});
