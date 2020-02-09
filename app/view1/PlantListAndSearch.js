'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/PlantListAndSearch.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
  
  /* BEGINING OF THE PLANT TABLE HEADER REQUESTS */

  // common_name Header Request.
  var CommonName = {
    method: 'GET',
    url: 'https://data.sfgov.org/resource/vmnk-skih.json',
    headers: {
    'Content-Type': Text
    },
    data: { common_name: 'common_name' }
    }
 $http(CommonName).then(function(){}, function(){});

 // Plant_Type Header Request.
 var PlantType = {
   method: 'GET',
   url: 'https://data.sfgov.org/resource/vmnk-skih.json',
   headers:{
     'Content-Type': Text
   },
   data: { plant_type: 'plant_type' }
  }
  $http(PlantType).then(function(){}, function(){});


  //Bloom_Time Header Request.
  var BloomTime = {
    method: 'GET',
    url: 'https://data.sfgov.org/resource/vmnk-skih.json',
    headers:{
      'Content-Type': Text
    },
    data: { bloom_time: 'bloom_time' }
   }
   $http(BloomTime).then(function(){}, function(){});

  
   // flower_color Header Request.
   var FlowerColor = {
    method: 'GET',
    url: 'https://data.sfgov.org/resource/vmnk-skih.json',
    headers:{
      'Content-Type': Text
    },
    data: { flower_color: 'flower_color' }
   }
   $http(FlowerColor).then(function(){}, function(){});
   

  // soil_type Header Request.
  var SoilType = {
    method: 'GET',
    url: 'https://data.sfgov.org/resource/vmnk-skih.json',
    headers:{
      'Content-Type': Text
    },
    data: { soil_type: 'soil_type' }
   }
   $http(SoilType).then(function(){}, function(){});


   // habitat_value Header Request.
   var HabitatValue = {
    method: 'GET',
    url: 'https://data.sfgov.org/resource/vmnk-skih.json',
    headers:{
      'Content-Type': Text
    },
    data: { habitat_value: 'habitat_value' }
   }
   $http(HabitatValue).then(function(){}, function(){});

   /* END OF THE PLANT TABLE */
}])

