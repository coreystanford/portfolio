myPortfolio.directive('drawCanvas', ['$window', '$rootScope', function($window, $rootScope) {
    return {
    	restrict: 'A',
        scope: {
          canvasId: '@'
        },
        link : function($scope, element, attrs) {

        	// http://jsfiddle.net/m1erickson/hzNg4/

        	var canvas = document.getElementById($scope.canvasId);
			var ctx = canvas.getContext("2d");
			var mouseX, mouseY, startX, startY, offsetNum = 0;

			function handleMouseMove(e) {
			    e.preventDefault();

			    //console.log($rootScope.offsetY);
			    if($rootScope.offsetY != 0){
					var parseOpen = $rootScope.offsetY.split('(');
					var parseClose = parseOpen[1].split(')');
					offsetNum = parseClose[0];
					offsetNum = offsetNum.substring(0, offsetNum.length - 2);
				}

			    mouseX = parseInt(e.clientX);
			    mouseY = parseInt(e.clientY) + parseInt(offsetNum) - parseInt($rootScope.menuOffsetY);

			    // Put your mousemove stuff here
			    ctx.beginPath();
			    ctx.moveTo(startX, startY);
			    ctx.lineWidth = 2;
			    ctx.lineTo(mouseX, mouseY);
			    ctx.stroke();
			    startX = mouseX;
			    startY = mouseY;

			}

			$window.addEventListener('mousemove', handleMouseMove);

        }
    }
}]);