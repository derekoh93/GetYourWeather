'use strict';

/**
 * @ngdoc function
 * @name GetYourWeatherApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the GetYourWeatherApp
 */
angular.module('GetYourWeather')
.controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
  $scope.cityID = $routeParams.cityID;

  $scope.forecastData = forecast.query({
      cityID: $routeParams.cityID
  });
});
