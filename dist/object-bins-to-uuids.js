"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate.js"));

var _stringifyNoValidation = _interopRequireDefault(require("./stringify-no-validation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function objectBinsToUuids(objWithBins) {
  const objWithUuids = {};
  Object.entries(objWithBins).forEach(([key, value]) => {
    objWithUuids[key] = (0, _validate.default)(value) ? (0, _stringifyNoValidation.default)(value) : value;
  });
  return objWithUuids;
}

var _default = objectBinsToUuids;
exports.default = _default;