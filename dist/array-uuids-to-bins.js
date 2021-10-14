"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validate = _interopRequireDefault(require("./validate.js"));

var _uuidToBin = _interopRequireDefault(require("./uuid-to-bin.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arrayUuidsToBins(arrayWithUuids) {
  return arrayWithUuids.map(value => typeof value === 'string' && (0, _validate.default)(value) ? (0, _uuidToBin.default)(value) : value);
}

var _default = arrayUuidsToBins;
exports.default = _default;