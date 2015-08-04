describe('userServiceTest', function() {

    // Données de test
    var USER = {
        prenom: "Bob",
        nom: "Cramer"
    };

    var userService;
    var $httpBackend;
    var $timeout;

    beforeEach(module('angularShop.shared'));

    beforeEach(inject(function(_$httpBackend_, _$timeout_, _userService_) {
        $timeout = _$timeout_;
        $httpBackend = _$httpBackend_;
        userService = _userService_;
    }));

    // Tests

    it('Should get current user', function(done) {
        var testUser = function(user) {
            expect(user).toBeDefined();
            expect(user).toEqual(USER);
        };

        var failTest = function(error) {
            expect(error).toBeUndefined();
        };

        $httpBackend
            .expectGET('users/current')
            .respond(USER);

        // Ne pas oublier de tester la promesse en erreur avec le catch
        // Sinon le test sera OK même lorsqu'il y a un problème !
        userService.getCurrentUserInformation()
            .then(testUser)
            .catch(failTest)
            .finally(done);

        // Déclenchement des promesses
        $timeout.flush();
        $httpBackend.flush();
    });

    it('Should login current user', function(done) {

        // TODO

        // Appel de la fonction pour éviter de bloquer le test
        done();
    });

    it('Should logout current user', function(done) {

        // TODO

        // Appel de la fonction pour éviter de bloquer le test
        done();
    });

});
