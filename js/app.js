var myPortfolio = angular.module('myPortfolio', ['ui.router']);

myPortfolio.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'header': { templateUrl: 'views/home.html', 
                			controller: 'PortfolioController' },
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
        .state('case', {
            url: '/case/:id',
            views: {
                'header': { templateUrl: 'views/inner.html', 
                			controller: 'PortfolioController' },
                'content': { templateUrl: 'views/case.html', 
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


