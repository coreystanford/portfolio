var myPortfolio = angular.module('myPortfolio', ['ui.router']);

myPortfolio.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'header': { templateUrl: 'views/home-header.html', 
                			controller: function ($scope) {}
                            },
                'content': { templateUrl: 'views/gallery.html', 
                			controller: function ($scope) {}
                            }
            }
        })
        .state('about', {
            url: '/about',
            views: {
                'header': { templateUrl: 'views/static-header.html', 
                			controller: function ($scope) {
                                    $scope.title = 'About';
                                    $scope.titleSwitch = true;
                                }
                            },
                'content': { templateUrl: 'views/about.html', 
                			controller: function ($scope) {}
                            }
            }
        })
        .state('contact', {
            url: '/contact',
            views: {
                'header': { templateUrl: 'views/static-header.html', 
                			controller: function ($scope) {
                                    $scope.title = 'Contact';
                                    $scope.titleSwitch = true;
                                }
                            },
                'content': { templateUrl: 'views/contact.html', 
                			controller: function ($scope) {}
                            }
            }
        })
        .state('vancityparks', {
            url: '/vancityparks',
            views: {
                'header': { templateUrl: 'views/case-header.html', 
                			controller: function ($scope) {
                                    $scope.title = 'VanCityParks';
                                    $scope.titleSwitch = true;
                                    $scope.caseBG = 'vancity';
                                }
                            },
                'content': { templateUrl: 'views/vancityparks.html', 
                			controller: function ($scope) {

                                }
                            }
            }   
        })
        .state('jibe', {
            url: '/jibe',
            views: {
                'header': { templateUrl: 'views/case-header.html', 
                            controller: function ($scope) {
                                    $scope.title = 'JIBE';
                                    $scope.titleSwitch = true;
                                    $scope.caseBG = 'jibe';
                                }
                            },
                'content': { templateUrl: 'views/jibe.html', 
                            controller: function ($scope) {

                                }
                            }
            }   
        })
        .state('mics', {
            url: '/mics',
            views: {
                'header': { templateUrl: 'views/case-header.html', 
                            controller: function ($scope) {
                                    $scope.title = 'MICs Group';
                                    $scope.titleSwitch = true;
                                    $scope.caseBG = 'mics';
                                }
                            },
                'content': { templateUrl: 'views/mics.html', 
                            controller: function ($scope) {
                                    
                                }
                            }
            }   
        })
        .state('glassbellows', {
            url: '/glassbellows',
            views: {
                'header': { templateUrl: 'views/case-header.html', 
                            controller: function ($scope) {
                                    $scope.title = 'Glass + Bellows';
                                    $scope.titleSwitch = true;
                                    $scope.caseBG = 'glassbellows';
                                }
                            },
                'content': { templateUrl: 'views/glassbellows.html', 
                            controller: function ($scope) {
                                    
                                }
                            }
            }   
        })
        .state('404', {
            url: '/404',
            views: {
                'header': { templateUrl: 'views/case-header.html', 
                			controller: function ($scope) {
                                    
                                }
                            },
                'content': { templateUrl: 'views/404.html', 
                			controller: function ($scope) {
                                    
                                }
                            }
            }    
        });

    $urlRouterProvider.otherwise('/');

}]);

// http://stackoverflow.com/questions/26444418/autoscroll-to-top-with-ui-router-and-angularjs
// http://stackoverflow.com/questions/18880737/how-do-i-use-rootscope-in-angular-to-store-variables
myPortfolio.run(function($rootScope, $location, smoothAnchorScroll){

    $rootScope.$on('$stateChangeSuccess', function() {
       smoothAnchorScroll.scrollTo('start');
    });

    $rootScope.gotoElement = function (eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(eID);
 
      // call $anchorScroll()
      smoothAnchorScroll.scrollTo(eID);
      
    };

});


