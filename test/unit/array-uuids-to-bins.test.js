import assert from 'assert';
import arrayUuidsToBins from '../../src/array-uuids-to-bins';
import uuidToBin from '../../src/uuid-to-bin';
import v1 from '../../src/v1';

describe('array-uuids-to-bins', () => {
  test('Array with some uuids and some non-valid uuids and other type -> Array with binified valid uuids', () => {
    const uuid1 = v1();
    const uuid2 = v1();
    const invalidUuid = v1().split('').reverse().join('');
    const arrayWithUuids = [uuid1, 5, 'string', null, uuid2, invalidUuid];
    assert.deepStrictEqual(arrayUuidsToBins(arrayWithUuids), [
      uuidToBin(uuid1),
      5,
      'string',
      null,
      uuidToBin(uuid2),
      invalidUuid,
    ]);
  });
});
