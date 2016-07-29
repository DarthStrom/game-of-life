var _ = require('lodash');

exports.iterate = function (grid) {
  return _.map(grid, function (row, rowNum) {
    return _.map(row, function (column, columnNum) {
      var neighbors = getNeighbors(grid, rowNum, columnNum);
      return shouldLive(neighbors) ? 1 : 0;
    });
  });
};

function mod(n, m) {
  return ((n % m) + m) % m;
}

function getNeighbors(grid, rowNum, columnNum) {
  var rows = grid.length;
  var columns = grid[0].length;
  var above = grid[mod(rowNum - 1, rows)][columnNum];
  var below = grid[mod(rowNum + 1, rows)][columnNum];
  var left = grid[rowNum][mod(columnNum - 1, columns)];
  var right = grid[rowNum][mod(columnNum + 1, columns)];

  return _.sum([above, below, left, right]);
}

function shouldLive(neighbors) {
  return 1 < neighbors && neighbors < 4
}
