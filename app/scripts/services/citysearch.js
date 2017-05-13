'use strict';

/**
 * @ngdoc service
 * @name GetYourWeatherApp.citysearch
 * @description
 * # citysearch
 * Factory in the GetYourWeatherApp.
 */


 angular.module('GetYourWeather')
   .factory('citysearch', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=0abed609952210f52ec8119239c1db6b', {}, {
       find: {
         method: 'GET',
         params: {
           query: 'seattle'
         },
         isArray: false
       }
     });
   });
