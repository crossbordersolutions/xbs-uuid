"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parse = _interopRequireDefault(require("./parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uuidToBin(uuidAsString) {
  return Buffer.from((0, _parse.default)(uuidAsString));
}

var _default = uuidToBin;
exports.default = _default;