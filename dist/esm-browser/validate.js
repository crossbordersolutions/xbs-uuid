import REGEX from './regex.js';
import stringifyNoValidation from './stringify-no-validation.js';

function validateString(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

function validateBin(uuid) {
  return validateString(stringifyNoValidation(uuid));
}

function validate(uuid) {
  return Buffer.isBuffer(uuid) || Array.isArray(uuid) || ArrayBuffer.isView(uuid) ? validateBin(uuid) : validateString(uuid);
}

export default validate;