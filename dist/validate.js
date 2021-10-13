"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regex = _interopRequireDefault(require("./regex.js"));

var _stringifyNoValidation = _interopRequireDefault(require("./stringify-no-validation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateString(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

function validateBin(uuid) {
  return validateString((0, _stringifyNoValidation.default)(uuid));
}

function validate(uuid) {
  return Buffer.isBuffer(uuid) || Array.isArray(uuid) || ArrayBuffer.isView(uuid) ? validateBin(uuid) : validateString(uuid);
}

var _default = validate;
exports.default = _default;