import parse from './parse.js';
import validate from './validate.js';
import stringifyNoValidation from './stringify-no-validation.js';

class UuidUtils {
  static uuidToBin(uuidAsString) {
    return Buffer.from(parse(uuidAsString));
  }

  static objectBinsToUuids(objWithBins) {
    const objWithUuids = {};
    Object.entries(objWithBins).forEach(([key, value]) => {
      objWithUuids[key] = validate(value) ? stringifyNoValidation(value) : value;
    });
    return objWithUuids;
  }

  static arrayOfObjectsBinsToUuids(arrayWithBins) {
    return arrayWithBins.map(objWithBins => UuidUtils.objectBinsToUuids(objWithBins));
  }

}

export default UuidUtils;