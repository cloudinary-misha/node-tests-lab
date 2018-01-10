var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});


describe('Environement settings', function() {
  describe('#Environment variables are set', function() {
    it('it should return env variable TEST=yes', function() {
      assert.equal(process.env.TEST, "yes");
    });
    
    // it('it should check CLOUDINARY_URL', function() {
    //   assert.equal(process.env.CLOUDINARY_URL, "cloudinary://09287340928734:638nxwbfFZQk@sdk-test");
    // });
  });
});

