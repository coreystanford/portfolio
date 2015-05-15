var myPortfolio = angular.module('myPortfolio', ['ui.router']);

myPortfolio.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'header': { templateUrl: 'views/home.html' },
                'content': { templateUrl: 'views/gallery.html' }
            },
            controller: 'PortfolioController'
        })
        .state('about', {
            url: '/about',
            views: {
                'header': { templateUrl: 'views/inner.html' },
                'content': { templateUrl: 'views/about.html' }
            },
            controller: 'PortfolioController'     
        })
        .state('contact', {
            url: '/contact',
            views: {
                'header': { templateUrl: 'views/inner.html' },
                'content': { templateUrl: 'views/contact.html' }
            },
            controller: 'PortfolioController'     
        })
        .state('case', {
            url: '/case/:id',
            views: {
                'header': { templateUrl: 'views/inner.html' },
                'content': { templateUrl: 'views/case.html' }
            },
            controller: 'PortfolioController'     
        })
        .state('404', {
            url: '/404',
            views: {
                'header': { templateUrl: 'views/inner.html' },
                'content': { templateUrl: 'views/404.html' }
            },
            controller: 'PortfolioController'     
        });

    $urlRouterProvider.otherwise('/');
}]);


