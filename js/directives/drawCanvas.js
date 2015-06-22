myPortfolio.directive('drawCanvas', ['$window', '$rootScope', function($window, $rootScope) {
    return {
    	restrict: 'A',
        scope: {
          canvasId: '@',
          clearCanvasId: '@'
        },
        link : function($scope, element, attrs) {

        	// http://jsfiddle.net/m1erickson/hzNg4/

        	var canvas = document.getElementById($scope.canvasId);
        	var clearCanvas = document.getElementById($scope.canvasId);
			var ctx = canvas.getContext("2d");
			var mouseX, mouseY, startX, startY, offsetNum = 0;

			function handleMouseMove(e) {
			    e.preventDefault();

			    if($rootScope.offsetY != 0){
					var parseOpen = $rootScope.offsetY.split('(');
					var parseClose = parseOpen[1].split(')');
					offsetNum = parseClose[0];
					offsetNum = offsetNum.substring(0, offsetNum.length - 2);
				}

				//console.log(offsetNum);
				//console.log(e.clientY);
			    mouseX = parseInt(e.clientX);
			    mouseY = parseInt(e.clientY) + parseInt(offsetNum) - parseInt($rootScope.menuOffsetY);

			    //console.log("Mouse Position: " + mouseY);

			    // Put your mousemove stuff here
			    ctx.beginPath();
			    ctx.moveTo(startX, startY);
			    ctx.lineWidth = 2;
			    ctx.lineTo(mouseX, mouseY);
			    ctx.stroke();
			    startX = mouseX;
			    startY = mouseY;

			}

			function clearThisCanvas(){
				
				ctx.clearRect(0, 0, canvas.width, canvas.height);

			}

			$window.addEventListener('mousemove', handleMouseMove);
			clearCanvas.addEventListener('click', clearThisCanvas);

        }
    }
}]);