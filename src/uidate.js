angular.module('ui.date', []).
  directive('dateInput', function() {
    
    return {
      restrict: 'E',
      scope: {
        ngModel: "="
      },
  template: "<div class='input-append'><input date-picker ng-model='ngModel' class='input-small' type='text'/><span class='add-on' style='cursor: pointer'><i class='icon-calendar'></i></span></div>",
      link: function (scope, element, attrs, ctrl) {
        $(element).find(".add-on").click(function() {
          $(element).find("input[type='text']").focus().select(); 
        }); 
      }
    }
  
  }).
  directive('datePicker', function() {

      return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl)
        {
          $(element).datepicker({
            dateFormat: "yy-mm-dd",
            onSelect: function(date) {
              ngModelCtrl.$setViewValue(date);
              scope.$apply();
            }
            
          }); 
        }
      }
  
  });
  
