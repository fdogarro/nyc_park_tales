'use strict'; 

var signApp = angular.module('signApp', []);

signApp.controller('SignCtrl', function($scope, $http){
	$http.get('signs/signs.json').success(function(data){
    $scope.signs = data;
  });
});