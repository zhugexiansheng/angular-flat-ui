/**
 * angular switch
 * @description: angular switch
 * @author: xiaoming
 * @date: 2016/03/15
 */
(function(){
  angular.module('an-switch', [])
    .directive('anSwitch', anSwitch);

  anSwitch.$inject = [];

  function anSwitch(){
    return {
      restrict: 'AE',
      require: '?ngModel',
      link: function(scope, elem, attrs, ngModel){
        var _dom = elem[0];

        if((!attrs.dataToggle)&&(attrs.dataToggle!=='switch')){
          _dom.setAttribute('data-toggle', 'switch');
        }

        if (ngModel) {
          ngModel.$render = function(){
            elem.bootstrapSwitch({
              state: ngModel.$viewValue,
              onText: attrs.onText || 'ON',
              offText: attrs.offText || 'OFF',
              onSwitchChange: function(e){
                ngModel.$setViewValue(elem.is(":checked"));
              }
            });
          };
        }else{
          elem.bootstrapSwitch({
            onText: attrs.onText || 'ON',
            offText: attrs.offText || 'OFF'
          });
        }       
      }
    };
  }
})();