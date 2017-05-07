'use strict';

/**
 * @ngdoc service
 * @name TrafficApp.current
 * @description
 * # current
 * Factory in the TrafficApp.
 */
angular.module('TrafficApp')
  .factory('current', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
