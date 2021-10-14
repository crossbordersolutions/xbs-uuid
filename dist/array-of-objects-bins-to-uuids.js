"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectBinsToUuids = _interopRequireDefault(require("./object-bins-to-uuids"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arrayOfObjectsBinsToUuids(arrayWithBins) {
  return arrayWithBins.map(objWithBins => (0, _objectBinsToUuids.default)(objWithBins));
}

var _default = arrayOfObjectsBinsToUuids;
exports.default = _default;