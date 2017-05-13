'use strict';

/**
 * @ngdoc function
 * @name GetYourWeatherApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the GetYourWeatherApp
 */
 angular.module('GetYourWeather')
   .controller('CurrentCtrl', function ($scope, $routeParams, current) {
     $scope.cityID = $routeParams.cityID;

     $scope.currentWeather = current.query({
         cityID: $routeParams.cityID
     });
   });
