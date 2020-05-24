const assert = require('assert').strict;
const DevService = require('../../service/dev');

describe('devService', () => {
  describe('sanitizes names', () => {
    const devService = new DevService({});
    it('should leave a correct separation as it is', () => {
      const { fName, mNames, lName } = devService.sanitizeNames(
        'John',
        'Alexander',
        'Smith'
      );
      assert.strictEqual('John', fName);
      assert.strictEqual('Alexander', mNames);
      assert.strictEqual('Smith', lName);
    });

    it('should trim whitespace', () => {
      const { fName, mNames, lName } = devService.sanitizeNames(
        '  Megan    ',
        '   Maria   ',
        '      Willians '
      );
      assert.strictEqual('Megan', fName);
      assert.strictEqual('Maria', mNames);
      assert.strictEqual('Willians', lName);
    });

    it('should ignore middlenames if not present', () => {
      const { fName, mNames, lName } = devService.sanitizeNames(
        '  Larry    ',
        null,
        '      Gates'
      );
      assert.strictEqual('Larry', fName);
      assert.strictEqual(null, mNames);
      assert.strictEqual('Gates', lName);
    });

    it('should ignore empty string as middle name', () => {
      const { fName, mNames, lName } = devService.sanitizeNames(
        '  Tom    ',
        '',
        '      Brown'
      );
      assert.strictEqual('Tom', fName);
      assert.strictEqual(null, mNames);
      assert.strictEqual('Brown', lName);
    });
    it('should eliminate duplicate spaces in between middlenames', () => {
      const { fName, mNames, lName } = devService.sanitizeNames(
        '  Larry    ',
        '   Alexander   Jonathan  ',
        '      Gates '
      );
      assert.strictEqual('Larry', fName);
      assert.strictEqual('Alexander Jonathan', mNames);
      assert.strictEqual('Gates', lName);
    });
  });
});
