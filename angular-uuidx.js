(function(angular) {
  'use strict';

  var module = angular.module('uuidx', []);

  // Source: http://stackoverflow.com/a/2117523/377392
  module.factory('uuid', function() {
    return {
      generate: function() {
        var fmt = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
        return fmt.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
        });
      }
    };
  });

}(angular));
