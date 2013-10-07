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

  });
});
