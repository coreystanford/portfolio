//http://www.grobmeier.de/angular-js-the-show-on-mouseenter-hide-on-mouseleave-directive-31082012.html#.VVeqqpNViko
myPortfolio.directive('headHome', function() {
      return {
         link : function($scope, element, attrs) {
          
            element.bind('mouseenter', function() {
                if(!$scope.titleSwitch){
                  $scope.titleSwitch = true;
                  return $scope.$apply();
                } else {
                  $scope.titleSwitch = false;
                  return $scope.$apply();
                }
            });
            
            element.bind('mouseleave', function() {
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