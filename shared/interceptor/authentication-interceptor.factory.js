angular.module('angularShop.shared')
  .factory('httpInterceptor', function($log, $q, $location) {

    var interceptor = {

      responseError: function(response) {

        // TODO : si erreur 401, rediriger vers '/connection'

        // TODO : si erreur 404 ou 500, afficher un bandeau d'erreur global à l'utilisateur

        // Sinon propager l'erreur à l'appelant
        return $q.reject(response);
      }
    };

    return interceptor;
  });
