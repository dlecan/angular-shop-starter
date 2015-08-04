angular.module('angularShop', ['ui.utils', 'ngRoute', 'ngAnimate']);

angular.module('angularShop').config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('angularShop').run(function($rootScope) {

});
