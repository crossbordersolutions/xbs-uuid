import validate from './validate.js';
import uuidToBin from './uuid-to-bin.js';

function objectUuidsToBins(objWithUuids) {
  const objWithBins = {};
  Object.entries(objWithUuids).forEach(([key, value]) => {
    objWithUuids[key] = typeof uuid === 'string' && validate(value) ? uuidToBin(value) : value;
  });
  return objWithBins;
}

export default objectUuidsToBins;
