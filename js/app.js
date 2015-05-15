var myPortfolio = angular.module('myPortfolio', ['ui.router']);

myPortfolio.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'PortfolioController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'PortfolioController'     
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html',
            controller: 'PortfolioController'     
        })
        .state('case', {
            url: '/case/:id',
            templateUrl: 'views/case.html',
            controller: 'PortfolioController'     
        })
        .state('404', {
            url: '/404',
            templateUrl: 'views/404.html',
            controller: 'PortfolioController'     
        });

    $urlRouterProvider.otherwise('/');
}]);


