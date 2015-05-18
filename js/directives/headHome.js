//http://www.grobmeier.de/angular-js-the-show-on-mouseenter-hide-on-mouseleave-directive-31082012.html#.VVeqqpNViko
myPortfolio.directive('headHome', function() {
      return {
         link : function($scope, element, attrs) {
          
            element.parent().bind('mouseenter', function() {
                if(!$scope.titleSwitch){
                  $scope.titleSwitch = true;
                  return $scope.$apply();
                } else {
                  $scope.titleSwitch = false;
                  return $scope.$apply();
                }
            });
            
            element.parent().bind('mouseleave', function() {
                if(!$scope.titleSwitch){
                  $scope.titleSwitch = true;
                  return $scope.$apply();
                } else {
                  $scope.titleSwitch = false;
                  return $scope.$apply();
                }
            });
       }
   };
});