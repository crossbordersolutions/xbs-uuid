import assert from 'assert';
import objectUuidsToBins from '../../src/object-uuids-to-bins';
import uuidToBin from '../../src/uuid-to-bin';
import v1 from '../../src/v1';

describe('object-uuids-to-bins', () => {
  test('Object with some uuids and some non-valid uuids and other type -> Object with binified valid uuids', () => {
    const uuid1 = v1();
    const uuid2 = v1();
    const invalidUuid = v1().split('').reverse().join('');
    const objectWithUuids = {
      uuid1: uuid1,
      5: 5,
      string: 'string',
      null: null,
      uuid2: uuid2,
      invalidUuid: invalidUuid,
    };
    assert.deepStrictEqual(objectUuidsToBins(objectWithUuids), {
      uuid1: uuidToBin(uuid1),
      5: 5,
      string: 'string',
      null: null,
      uuid2: uuidToBin(uuid2),
      invalidUuid: invalidUuid,
    });
  });
});
