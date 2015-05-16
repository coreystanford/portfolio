// http://microblog.anthonyestebe.com/2013-11-30/window-resize-event-with-angular/

myPortfolio.directive('resizable', function($window) {

  return function($scope) {

    $scope.initializeWindowSize = function() {
      return $scope.resizeHeight = { "height": $window.innerHeight + "px" };
    };

    $scope.initializeWindowSize();

    return angular.element($window).bind('resize', function() {
      $scope.initializeWindowSize();
      return $scope.$apply();
    });

  };

});
