var game = require('./game');

describe('game', function () {

  describe('Any live cell with fewer than two live neighbours dies, as if caused by under-population.', function () {

    it('single cell does not survive', function () {
      expect(game.iterate([1])).toEqual([0]);
    });
  });

  describe('Any live cell with two or three live neighbours lives on to the next generation.', function () {

  });

  describe('Any live cell with more than three live neighbours dies, as if by over-population.', function () {

  });

  describe('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', function () {

  });
});
