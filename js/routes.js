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
                                }
                            },
                'content': { templateUrl: 'views/contact.html', 
                            controller: 'ContactController'
                            }
            }
        })
        .state('gallery', {
            url: '/',
            views: {
                'header': { templateUrl: 'views/home-header.html', 
                            controller: function ($scope, $location) {
                                    $location.hash('gallery-wrap');
                                }
                            },
                'content': { templateUrl: 'views/gallery.html', 
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
                                    $scope.title = 'Jibe';
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