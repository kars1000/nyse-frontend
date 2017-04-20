angular.module('app').config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    //$urlRouterProvider.otherwise('/');



    $stateProvider.state('search', {
        url : '/search',
        controller : 'SearchController as vm',
        templateUrl : 'app/search/search.html'
    });
    
    $stateProvider.state('portfolio', {
        abstract: true,
        url: '/portfolio',
        controller : 'PortfolioController as vm',
        template: '<ui-view/>'
    })
    
    
    $stateProvider.state('portfolio.view', {
        controller : 'PortfolioController as vm',
        templateUrl : 'app/portfolio/view.html'
    });
    
    
    
    $stateProvider.state('portfolio.add', {
        templateUrl : 'app/portfolio/add.html'
    });

//    $stateProvider.state('portfolio/add', {
//        url : '/portfolio/add',
//        component : 'portfolio'
//    });
//    
//    $stateProvider.state('portfolio', {
//        url : '/portfolio',
//        controller : 'PortfolioController as vm'
//        templateUrl : 'app/portfolio/view.html',
//
//    });
//
//    $stateProvider.state('portfolio.add', {
//        url : '/add',
//        controller : 'PortfolioController as vm',
//        templateUrl : 'app/portfolio/add.html'
//    });

}
