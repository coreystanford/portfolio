var myPortfolio = angular.module('myPortfolio', ['ui.router']);

myPortfolio.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'header': { templateUrl: 'views/home.html', 
                			controller: 'HomeController' },
                'content': { templateUrl: 'views/gallery.html', 
                			controller: 'PortfolioController' }
            }
        })
        .state('about', {
            url: '/about',
            views: {
                'header': { templateUrl: 'views/inner.html', 
                			controller: 'AboutController' },
                'content': { templateUrl: 'views/about.html', 
                			controller: 'AboutController' }
            }
        })
        .state('contact', {
            url: '/contact',
            views: {
                'header': { templateUrl: 'views/inner.html', 
                			controller: 'ContactController' },
                'content': { templateUrl: 'views/contact.html', 
                			controller: 'ContactController' }
            }
        })
        .state('vancityparks', {
            url: '/vancityparks',
            views: {
                'header': { templateUrl: 'views/inner.html', 
                			controller: function ($scope) {
                                    $scope.title = 'VanCityParks';
                                    $scope.titleSwitch = true;
                                }
                            },
                'content': { templateUrl: 'views/vancityparks.html', 
                			controller: 'PortfolioController' }
            }   
        })
        .state('jibe', {
            url: '/jibe',
            views: {
                'header': { templateUrl: 'views/inner.html', 
                            controller: function ($scope) {
                                    $scope.title = 'JIBE';
                                    $scope.titleSwitch = true;
                                }
                            },
                'content': { templateUrl: 'views/jibe.html', 
                            controller: 'PortfolioController' }
            }   
        })
        .state('mics', {
            url: '/mics',
            views: {
                'header': { templateUrl: 'views/inner.html', 
                            controller: function ($scope) {
                                    $scope.title = 'MICs Group';
                                    $scope.titleSwitch = true;
                                }
                            },
                'content': { templateUrl: 'views/mics.html', 
                            controller: 'PortfolioController' }
            }   
        })
        .state('glassbellows', {
            url: '/glassbellows',
            views: {
                'header': { templateUrl: 'views/inner.html', 
                            controller: function ($scope) {
                                    $scope.title = 'Glass + Bellows';
                                    $scope.titleSwitch = true;
                                }
                            },
                'content': { templateUrl: 'views/glassbellows.html', 
                            controller: 'PortfolioController' }
            }   
        })
        .state('404', {
            url: '/404',
            views: {
                'header': { templateUrl: 'views/inner.html', 
                			controller: 'PortfolioController' },
                'content': { templateUrl: 'views/404.html', 
                			controller: 'PortfolioController' }
            }    
        });

    $urlRouterProvider.otherwise('/');
}]);


