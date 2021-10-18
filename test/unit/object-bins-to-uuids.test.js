import assert from 'assert';
import objectBinsToUuids from '../../src/object-bins-to-uuids';
import uuidToBin from '../../src/uuid-to-bin';
import v1 from '../../src/v1';

const knownUuid = '0f5abcd1-c194-47f3-905b-2df7263a084b';
const knownUuidAsBin = Uint8Array.from([
  0x0f,
  0x5a,
  0xbc,
  0xd1,
  0xc1,
  0x94,
  0x47,
  0xf3,
  0x90,
  0x5b,
  0x2d,
  0xf7,
  0x26,
  0x3a,
  0x08,
  0x4b,
]);
const knownUuidAsBinInvalidated = [...knownUuidAsBin.slice(0, 3), 256, ...knownUuidAsBin.slice(4)];

describe('object-bins-to-uuids', () => {
  test('Object with some uuids as bins and some non-valid uuids as bins and other type -> Object with stringified valid uuids', () => {
    const uuid1 = v1();
    const uuid2 = v1();
    const invalidUuid = v1().split('').reverse().join('');
    const objectWithUuids = {
      uuid1: uuidToBin(uuid1),
      5: 5,
      string: 'string',
      null: null,
      uuid2: uuidToBin(uuid2),
      invalidUuid: invalidUuid,
      knownUuid: knownUuidAsBin,
      knownUuidAsBinInvalidated: knownUuidAsBinInvalidated,
    };
    assert.deepStrictEqual(objectBinsToUuids(objectWithUuids), {
      uuid1: uuid1,
      5: 5,
      string: 'string',
      null: null,
      uuid2: uuid2,
      invalidUuid: invalidUuid,
      knownUuid: knownUuid,
      knownUuidAsBinInvalidated: knownUuidAsBinInvalidated,
    });
  });
});
