/**
 * an-slider
 *
 * @description: angular slider控件
 * @author: xiaoming
 * @date: 2016/03/15
 */

(function(){
	'use strict';

	angular.module('an-slider', [])
		.directive('anSlider', anSlider);

	anSlider.$inject = [];
	function anSlider(){
		var SLIDEROPTION = [
			'anMax',
			'anMin',
			'anStep',
			'anOrientation'
		];
		return {
			restrict: 'AE',
			require: '?ngModel',
			link: function(scope, elem, attr, ngModel){
				var options = {}, 
					refreshFn = new Function();

				function snakeCase(input) {
		           	var ninput = input.replace(/[A-Z]/g, function($1) {
		              return "-" + ($1.toLowerCase());
		            });

		            return ninput.split("-")[1];
		        }

		        function initSlider(option){		        	
		        	if(attr['anSegments']&&scope.$eval(attr['anSegments'])&&(!elem.hasClass('ui-slider'))){
		        		elem.slider(option).addSliderSegments();
		        	}else{
		        		elem.slider(option);
		        	}
		        }

				for(var i=0, len=SLIDEROPTION.length-1 ; i<=len; i++){
					var key = SLIDEROPTION[i];
					if(attr[key]){
						var nkey = snakeCase(key);
						options[nkey] = scope.$eval(attr[key]) || attr[key];
					}
				}

				if(ngModel){
					ngModel.$render = function(){
						if(ngModel.$viewValue instanceof Array){
							options["values"] = ngModel.$viewValue;

							refreshFn = function(uiHash){
								var newArr = uiHash.values.sort(function(a,b){
									return a-b;
								});

								return newArr;
							};
						}else{
							options['value'] = ngModel.$viewValue;

							refreshFn = function(uiHash){
								return uiHash.value;
							};
						}

						options['slide'] = function(e,uiHash){
							ngModel.$setViewValue(refreshFn(uiHash));
						};

						initSlider(options);
					};
				}else{
					initSlider(options);
				}
			}
		};
	}
})();