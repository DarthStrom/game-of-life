var game = require('./game');

describe('game', function () {

  describe('Any live cell with fewer than two live neighbors dies, as if caused by under-population.', function () {

    it('single cell does not survive', function () {
      expect(game.iterate([[1]])).toEqual([[0]]);
    });

    it('cells with only one neighbor do not survive', function () {
      expect(game.iterate([[1, 1]])).toEqual([[0, 0]]);
    });

    it('lonely cells in a grid', function () {
      expect(game.iterate([[0, 1], [1, 0]])).toEqual([[0, 0],[0, 0]]);
    });
  });

  describe('Any live cell with two or three live neighbors lives on to the next generation.', function () {

  });

  describe('Any live cell with more than three live neighbors dies, as if by over-population.', function () {

  });

  describe('Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.', function () {

  });
});
