"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate.js"));

var _uuidToBin = _interopRequireDefault(require("./uuid-to-bin.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function objectUuidsToBins(objWithUuids) {
  const objWithBins = {};
  Object.entries(objWithUuids).forEach(([key, value]) => {
    objWithUuids[key] = typeof uuid === 'string' && (0, _validate.default)(value) ? (0, _uuidToBin.default)(value) : value;
  });
  return objWithBins;
}

var _default = objectUuidsToBins;
exports.default = _default;