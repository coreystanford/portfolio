// http://microblog.anthonyestebe.com/2013-11-30/window-resize-event-with-angular/

myPortfolio.directive('resizeH', function($window) {

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


myPortfolio.directive('canvasResize', function($window) {

  return function($scope) {

    $scope.initializeWindowSize = function() {

      $scope.canvasHeight = $window.innerHeight + "px";
      return $scope.canvasWidth = $window.innerWidth + "px";

    };

    $scope.initializeWindowSize();

    return angular.element($window).bind('resize', function() {
      $scope.initializeWindowSize();
      return $scope.$apply();
    });

  };

});