import parse from './parse.js';

function uuidToBin(uuidAsString) {
  return Buffer.from(parse(uuidAsString));
}

export default uuidToBin;