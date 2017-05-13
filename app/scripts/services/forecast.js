'use strict';

/**
 * @ngdoc service
 * @name GetYourWeatherApp.forecast
 * @description
 * # forecast
 * Factory in the GetYourWeatherApp.
 */
angular.module('GetYourWeather')
.factory('forecast', function ($resource) {
  // Service logic
  // ...

  // Public API here
  return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=0abed609952210f52ec8119239c1db6b', {}, {
    query: {
      method:'GET',
      params:{
        cityID: '4717560' // Paris, France ID
      },
      isArray:false
    }
  });
});
