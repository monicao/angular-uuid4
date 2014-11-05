(function (angular) {
  'use strict';

  // RFC4122 version 4 compliant UUID generator.
  // Based on: http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
  angular.module('uuid4', []).factory('uuid4', function () {
    return {
      generate: function () {
        var now = typeof Date.now === 'function' ? Date.now() : new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (now + Math.random() * 16) % 16 | 0;
          now = Math.floor(now / 16);
          return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
      },
      // addition by Ka-Jan to test for validity
      // Based on: http://stackoverflow.com/questions/7905929/how-to-test-valid-uuid-guid
      validate: function (uuid) {
        var testPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return testPattern.test(uuid);
      }
    };
  });

}(angular));
