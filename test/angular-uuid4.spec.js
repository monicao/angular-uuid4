describe('uuid4', function() {
  beforeEach(module('uuid4'));

  describe('Testing uuid service', function() {
    var uuidService;

    beforeEach(inject(function(uuid4) {
      uuidService = uuid4;
    }));

    it('should generate a uuid', function(){
      // f7e81995-1a52-48a4-88d1-f979e1917b29
      expect(uuidService.generate()).toMatch(/[a-z0-9]{8}\-[a-z0-9]{4}\-[a-z0-9]{4}\-[a-z0-9]{4}\-[a-z0-9]{12}/)
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
