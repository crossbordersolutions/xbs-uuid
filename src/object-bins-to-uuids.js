import validate from './validate.js';
import stringifyNoValidation from './stringify-no-validation.js';

function objectBinsToUuids(objWithBins) {
  const objWithUuids = {};
  Object.entries(objWithBins).forEach(([key, value]) => {
    objWithUuids[key] = validate(value) ? stringifyNoValidation(value) : value;
  });
  return objWithUuids;
}

export default objectBinsToUuids;
