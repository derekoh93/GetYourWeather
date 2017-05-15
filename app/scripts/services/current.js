'use strict';

/**
 * @ngdoc service
 * @name GetYourWeather.current
 * @description
 * # current
 * Factory in the GetYourWeather.
 */
 angular.module('GetYourWeather')
   .factory('current', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('http://api.openweathermap.org/data/2.5/weather?q=:cityID&units=imperial&APPID=0abed609952210f52ec8119239c1db6b', {}, {
       query: {
         method:'GET',
         params:{
           cityID: '4717560' // Paris, France ID
         },
         isArray:false
       }
     });
   });
