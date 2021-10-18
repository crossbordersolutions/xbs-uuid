import validate from './validate.js';
import uuidToBin from './uuid-to-bin.js';

function objectUuidsToBins(objWithUuids) {
  const objWithBins = {};
  Object.entries(objWithUuids).forEach(([key, value]) => {
    objWithBins[key] = typeof value === 'string' && validate(value) ? uuidToBin(value) : value;
  });
  return objWithBins;
}

export default objectUuidsToBins;
