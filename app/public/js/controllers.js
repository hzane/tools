'use strict';

angular.module('myApp.controllers', ['jane','dick','tom']).
  controller('AppCtrl', function ($scope, $http) {
  	
  	$scope.submit = function(){
	    $http({
	      method: 'POST',
	      url: '/api/excel'
	    }).
	    success(function (data, status, headers, config) {
	    $scope.msg = 'success';
	      console.log('success');
	      console.log(data);
	    }).
	    error(function (data, status, headers, config) {
	    $scope.msg = 'error';
	      console.log('error');
	      console.log(data);
	    });


  	}
  	$scope.nickrios = function(){
  		function sufar(){return false;}
  		this.sashy = 'fancy';
  	}

  });

function howdydoodee(){
	function money(vars){
		return false;
	}
	this.prop = 4;
	this.fun = function(){
		if(3==3){return 'yes'}
	}
	return 'busted';
}