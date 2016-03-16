/**
 * an-radiocheck
 *
 * @description: angular-radiocheck
 * @author: xiaoming
 * @date: 2016/03/14
 */

(function(){
	'use strict';

	angular.module('an-radiocheck', [])
		.directive('anRadiocheck', anRadiocheck);

	anRadiocheck.$inject = [];
	function anRadiocheck(){
		return {
			restrict: 'AE',
			require: '?ngModel',
			link: function(scope, elem, attr, ngModel){
				var colorStyle = attr.radioType || 'green',
					inputType = attr.type,
					renderFn,
					toggleFn;
				elem.iCheck({
					checkboxClass: 'icheckbox_square-'+colorStyle,
				    radioClass: 'iradio_square-'+colorStyle,
				    increaseArea: '30%' // optional
				});

				if(inputType=="radio"){
					renderFn = function(){
						elem.iCheck((ngModel.$viewValue===attr.value)?"check":'uncheck');
					};

					toggleFn = function(){
						if(elem.is(":checked")){
							ngModel.$setViewValue(attr.value);
						}
					};
				}else if (inputType=="checkbox") {
					renderFn = function(){
						elem.iCheck(ngModel.$viewValue?'check':'uncheck');
					};

					toggleFn = function(){
						ngModel.$setViewValue(elem.is(":checked"));
					};
				}

				if(ngModel){
					ngModel.$render = function(){
						renderFn();
					};

					elem.on('ifToggled', function(e){
						toggleFn();
					});
				}
			}
		};
	}
})();