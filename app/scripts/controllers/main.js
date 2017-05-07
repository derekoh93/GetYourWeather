'use strict';

/**
 * @ngdoc function
 * @name GetYourWeather.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the GetYourWeather
 */
 angular.module('GetYourWeather')
   .controller('MainCtrl', function ($scope, current) {
     $scope.current = current.query();
   });
