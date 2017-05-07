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
     return $resource('https://maps.googleapis.com/maps/api/js?key=AIzaSyAqrPxA4eikgVFXND0ZmWR8laiicmNuPTs', {}, {
       query: {
         method:'GET',
         params:{
           location: 'Seattle,us'
         },
         isArray:false
       }
     });
   });
