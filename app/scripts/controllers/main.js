'use strict';

/**
 * @ngdoc function
 * @name TrafficApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the TrafficApp
 */
angular.module('TrafficApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();
  });
