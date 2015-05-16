'use strict';

/* Services */

angular.module('myApp.services', []).
  value('version', '0.1').factory('tester', function(){
  	var ok = 'yea';
  	return ok;
  });
