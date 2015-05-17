var myPortfolio = angular.module('myPortfolio', ['ui.router', 'ngAnimate']);

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
                                    $scope.constant = 'VanCityParks';
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
                                    $scope.constant = 'JIBE';
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
                                    $scope.constant = 'MICs Group';
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
                                    $scope.constant = 'Glass + Bellows';
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


