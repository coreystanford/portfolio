myPortfolio.directive('hidenav', function($window) {

  return function($scope) {

    if($scope.openNav){
      return angular.element(document.querySelector( '#shideNav' )).bind('mouseenter', function() {
        $scope.navStyle = { 'opacity': '1', 'bottom': '-45px' };
        $scope.openNav = true;
        return $scope.$apply();
      });
    } else {
      return angular.element(document.querySelector( '#shideNav' )).bind('mouseenter', function() {
        $scope.navStyle = { 'opacity': '0', 'bottom': '0' };
        $scope.openNav = false;
        return $scope.$apply();
      });
    }

  };

});