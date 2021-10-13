"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parse = _interopRequireDefault(require("./parse.js"));

var _validate = _interopRequireDefault(require("./validate.js"));

var _stringifyNoValidation = _interopRequireDefault(require("./stringify-no-validation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UuidUtils {
  static uuidToBin(uuidAsString) {
    return Buffer.from((0, _parse.default)(uuidAsString));
  }

  static objectBinsToUuids(objWithBins) {
    const objWithUuids = {};
    Object.entries(objWithBins).forEach(([key, value]) => {
      objWithUuids[key] = (0, _validate.default)(value) ? (0, _stringifyNoValidation.default)(value) : value;
    });
    return objWithUuids;
  }

  static arrayOfObjectsBinsToUuids(arrayWithBins) {
    return arrayWithBins.map(objWithBins => UuidUtils.objectBinsToUuids(objWithBins));
  }

}

var _default = UuidUtils;
exports.default = _default;