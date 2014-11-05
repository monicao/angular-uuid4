describe('uuid4', function() {
  beforeEach(module('uuid4'));

  describe('Testing uuid service', function() {
    var uuidService;

    beforeEach(inject(function(uuid4) {
      uuidService = uuid4;
    }));

    it('should generate a uuid', function(){
      var uuid = uuidService.generate()
      expect(uuidService.validate(uuid)).toEqual(true);
    });

    it('should validate a lower cased uuid', function(){
      // uuid taken from RFC http://www.ietf.org/rfc/rfc4122.txt
      expect(uuidService.validate('ded6dd9e-49d9-485b-bac1-da0ca0ae9d70')).toEqual(true);
    });

    it('should validate an uppper cased uuid', function(){
      expect(uuidService.validate('DED6DD9E-49D9-485B-BAC1-DA0CA0AE9D70')).toEqual(true);
    });

    it('should identify an invalid uuid', function(){
      expect(uuidService.validate('invalid')).toEqual(false);
    });

    it('should identify an undefined uuid', function(){
      expect(uuidService.validate(undefined)).toEqual(false);
    });
  });
});
