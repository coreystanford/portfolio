//http://www.grobmeier.de/angular-js-the-show-on-mouseenter-hide-on-mouseleave-directive-31082012.html#.VVeqqpNViko
myPortfolio.directive('headHome', function() {
      return {
         link : function($scope, element, attrs) {
          
            element.parent().bind('mouseenter', function() {
                if($scope.title == 'Home'){
                  $scope.title = $scope.constant;
                  return $scope.$apply();
                } else {
                  $scope.title = 'Home';
                  return $scope.$apply();
                }
            });
            element.parent().bind('mouseleave', function() {
                if($scope.title == 'Home'){
                  $scope.title = $scope.constant;
                  return $scope.$apply();
                } else {
                  $scope.title = 'Home';
                  return $scope.$apply();
                }
            });
       }
   };
});