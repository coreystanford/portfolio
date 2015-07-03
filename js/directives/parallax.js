// http://angularscript.com/pure-angularjs-parallax-scrolling-effect-perfectparallax/
myPortfolio.directive('parallax', ['$window', '$rootScope', function ($window, $rootScope) {

    return {
      restrict: 'A',
      scope: {
        pCss: '@',
        pInit: '@',
        pRatio: '@',
        pFade: '@'
      },
      link: function($scope, element, attr) {
        var cssKey,
          cssValue,
          isSpecialVal,
          parallaxCssVal,
          parallaxOffset,
          parallaxRatio,
          parallaxInitVal,
          cssValArray,
          pFade;

        parallaxCssVal = $scope.pCss ? $scope.pCss : 'top';
        cssValArray = parallaxCssVal.split(':');
        cssKey = cssValArray[0];
        cssValue = cssValArray[1];

        isSpecialVal = cssValue ? true : false;
        if (!cssValue) cssValue = cssKey;

        pRatio = $scope.pRatio ? +$scope.pRatio : 1.1;
        pInit = $scope.pInit ? +$scope.pInit : 0;

        element.css(cssKey, pInit + 'px');

        function onScroll() {
          var resultVal;
          var calcVal = $window.pageYOffset * pRatio + pInit;

          pFade = 1 - ($window.pageYOffset / $window.innerHeight);

          if(pFade <= 0){
            pFade = 0;
          }

          if (isSpecialVal) {
            resultVal = '' + cssValue + '(' + calcVal + 'px)';
          } else {
            resultVal = calcVal + 'px';
          }

          $rootScope.offsetY = resultVal;

          element.css(cssKey, resultVal);
          if(cssKey === 'transform') element.css("-webkit-" + cssKey, resultVal);
          element.css('opacity', pFade);
        };

        $window.addEventListener('scroll', onScroll);

      }
    };
  }
]);

