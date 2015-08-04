angular.module('angularShop', [
    'ui.utils',
    'ngRoute',
    'ngAnimate',
    'angularShop.shared',
    'angularShop.home'
]);

angular.module('angularShop').config(function($routeProvider) {

    // Ici, les routes générales de l'application
    // Pas de route spécifique ici !
    // Elles doivent être déclarées dans des sous-modules (comme 'home')
    $routeProvider.otherwise({redirectTo:'/home'});
});

angular.module('angularShop').run(function($rootScope) {

});

// Contrôleur qui pilote globalement l'application
angular.module('angularShop').controller("angularShopCtrl", function() {
    this.title = "Angular Shop";
});
