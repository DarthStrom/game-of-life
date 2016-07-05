var _ = require('lodash');

exports.iterate = function (grid) {
  return _.map(grid, function (row) {
    return _.map(row, function () {
      return 0;
    });
  });
};
