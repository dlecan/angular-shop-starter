angular.module('angularShop.shared').service('userService', function($http, $q) {

    var connected = false;

    this.isConnected = function() {
        return connected;
    };

    this.getCurrentUserInformation = function() {
        return $http.get("users/current").then(function(response) {
            return response.data;
        });
    };

    this.login = function(login, password) {
        // TODO : poster les données de l'utilisateur pour l'authentifier
        // sur la ressource '/login'
        // $http.post(...)

        // En cas de succès seulement
        connected = true;

        // Succès
        return $q.when("");
    };

    this.logout = function() {
        return $http.post("/logout", {}).then(function(response) {
            return response.data;
        }).finally(function() {
            connected = false;
        });
    };

});

