myPortfolio.directive('clearCanvas', ['$window', '$rootScope', function($window, $rootScope) {
    return {
    	restrict: 'A',
        scope: {
          canvasId: '@',
        },
        link : function($scope, element, attrs) {

        	var canvas = document.getElementById($scope.canvasId);
			var ctx = canvas.getContext("2d");

			element.bind("click",  function() {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				element.addClass('shakeOne');
			});

			element.bind('oanimationend animationend webkitAnimationEnd', function() { 
		        element.removeClass('shakeOne');
   			});

        }
    }
}]);