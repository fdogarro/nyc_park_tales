'use strict'; //top of all js file use strict make sure using the latest version of client js

var signApp = angular.module('signApp', []);

// create our controller as a function property
//connect application to the controller with scope. scope is a place we store resources. where all the data is.
signApp.controller('SignCtrl', function($scope){
	// making the resource
	$scope.signs = [
    { "id": 1,
      "name": "Aries",
      "bio": "Very forceful confrontational voice, fiercely independent, extremely competitive, freedom-loving, adventurous, enthusiastic, bold, ambitious, athletic, impulsive, reckless, dynamic, powerful, overly-confident, loud, warlike, blunt, hasty, hard-headed, stubborn, strong-willed, hot-tempered, rude, selfish, impulsive, enterprising, a risk-taker, an achiever, tends to act first and think later, the unstoppable force.",
      "color": "white",
      "personality": "relaxed",
      "planets": 2},
    { "id": 2,
      "name": "keyboard",
      "bio": "decipherment from which we spring tendrils of gossamer clouds quasar ship of the imagination rings of Uranus",
      "color": "grey",
      "personality": "nervous",
      "planets": 45},
    { "id": 3,
      "name": "laser",
      "bio": "stirred by starlight, gathered by gravity worldlets Jean-François Champollion at the edge of forever billions",
      "color": "grey",
      "personality": "aggresive",
      "planets": 666},
    { "id": 4,  
      "name": "lounge",
      "bio": "Flatland not a sunrise but a galaxyrise emerged into consciousness a mote of dust suspended in a sunbeam globular star cluster",
      "color": "grey",
      "personality": "relaxed",
      "planets": 1},
    { "id": 5,
      "name": "ohno",
      "bio": "Euclid preserve and cherish that pale blue dot Jean-François Champollion network of wormholes",
      "color": "orange",
      "personality": "nervous",
      "planets": 1337},
    { "id": 6,
      "name": "yucky",
      "bio": "The only home we've ever known dream of the mind's eye, prime number.",
      "color": "brown",
      "personality": "relaxed",
      "planets": 7}
  ]

});