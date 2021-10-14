import validate from './validate.js';
import uuidToBin from './uuid-to-bin.js';

function arrayUuidsToBins(arrayWithUuids) {
  return arrayWithUuids.map(value => typeof uuid === 'string' && validate(value) ? uuidToBin(value) : value);
}

export default arrayUuidsToBins;