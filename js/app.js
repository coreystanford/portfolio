var myPortfolio = angular.module('myPortfolio', ['ui.router']);

// http://stackoverflow.com/questions/26444418/autoscroll-to-top-with-ui-router-and-angularjs
// http://stackoverflow.com/questions/18880737/how-do-i-use-rootscope-in-angular-to-store-variables
myPortfolio.run(function($rootScope, $location, smoothAnchorScroll){

    $rootScope.$on('$stateChangeSuccess', function() {
       smoothAnchorScroll.scrollTo('start');
    });

    // global offsets for the canvas element ( drawCanvas.js )
    $rootScope.offsetY = 0;
    $rootScope.menuOffsetY = 0;

    $rootScope.gotoElement = function (eID){
      $location.hash(eID);
      smoothAnchorScroll.scrollTo(eID);
    };

    $rootScope.menuBtn = true;
    $rootScope.menu = { "top": "-60px" };

    $rootScope.toggleMenu = function (){
        if ($rootScope.menuBtn) {
            $rootScope.menu = { "top": "0px" };
            $rootScope.pageMenuToggle = { "margin-top": "60px" };
            $rootScope.menuBtn = false;
            $rootScope.menuOffsetY = 60;
        } else {
            $rootScope.menu = { "top": "-60px" };
            $rootScope.pageMenuToggle = { "margin-top": "0px" };
            $rootScope.menuBtn = true;
            $rootScope.menuOffsetY = 0;
        };
    }

});