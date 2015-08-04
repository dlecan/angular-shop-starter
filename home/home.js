// Déclaration du module 'home'
angular.module('angularShop.home', [
    'ngRoute',
    'angularShop.shared'
]);

// Configuration du module 'home'
angular.module('angularShop.home').config(function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'home/home.tpl.html',
            controller: 'homeCtrl as homeCtrl'
        })
        .when('/connection', {
            templateUrl: 'home/connection.tpl.html',
            controller: 'connectionCtrl as connectionCtrl'
        })
        .when('/logout', {
            templateUrl: 'home/logout.tpl.html',
            controller: 'logoutCtrl as logoutCtrl'
        });
});

// Contrôleur principal du module 'home'
// Usage de la syntaxe 'controller as', pas besoin du '$scope'
angular.module('angularShop.home').controller('homeCtrl', function(userService) {

    var self = this;

    // TODO : si on est pas connecté (réponse 4xx du serveur),
    // rediriger la page de connexion '/connection'
    // Astuce : utiliser un intercepteur
	userService.getCurrentUserInformation().then(function(user) {
        self.user = user;
    });

    // TODO : à transformer en directive
    this.isConnected = function() {
        return userService.isConnected();
    };

});

angular.module('angularShop.home').controller('connectionCtrl', function(userService, $location) {
    // TODO : implémenter le contrôleur et récupèrer les données de l'utilisateur
    // et le connecter avec la méthode 'userService.login(...)'

    this.login = function() {
        userService.login("", "")
            .then(function(success) {
                $location.path("/home");
            });
    };
});

angular.module('angularShop.home').controller('logoutCtrl', function(userService, $log) {

    function logout() {
        userService.logout()
            .then(function(success) {
                $log.debug("Déconnection avec succès");
            });
    }

    // Déconnexion
    logout();
});
