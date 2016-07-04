var _ = require('lodash');

exports.iterate = function (grid) {
  return _.map(grid, function () {
    return 0;
  });
};
