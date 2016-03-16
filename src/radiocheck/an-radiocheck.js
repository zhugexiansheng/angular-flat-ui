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
				var colorStyle = attr.radioType || 'green';
				elem.iCheck({
					checkboxClass: 'icheckbox_square-'+colorStyle,
				    radioClass: 'iradio_square-'+colorStyle,
				    increaseArea: '30%' // optional
				});

				if(ngModel){
					ngModel.$render = function(){
						elem.iCheck(ngModel.$viewValue?'check':'uncheck');
					};

					elem.on('ifToggled', function(e){
						ngModel.$setViewValue(elem.is(":checked"));
					});
				}
			}
		};
	}
})();