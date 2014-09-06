describe('uuid4', function() {
  beforeEach(module('uuid4'));

  describe('Testing uuid service', function() {
    var uuidService;

    beforeEach(inject(function(uuid4) {
      uuidService = uuid4;
    }));

    it('should generate a uuid', function(){
      expect(uuidService.generate()).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });

    it('should validate a lower cased uuid', function(){
      // uuid taken from RFC http://www.ietf.org/rfc/rfc4122.txt
      expect(uuidService.validate('f81d4fae-7dec-11d0-a765-00a0c91e6bf6')).toEqual(true);
    });

    it('should validate an uppper cased uuid', function(){
      expect(uuidService.validate('F81D4FAE-7DEC-11D0-A765-00A0C91E6BF6')).toEqual(true);
    });

    it('should identify an invalid uuid', function(){
      expect(uuidService.validate('invalid')).toEqual(false);
    });

    it('should identify an undefined uuid', function(){
      expect(uuidService.validate(undefined)).toEqual(false);
    });
  });
});
