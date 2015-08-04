describe('homeServiceTest', function() {

    var homeService;
    var $httpBackend;
    var $timeout;

    beforeEach(module('angularShop.home'));

    beforeEach(inject(function(_$httpBackend_, _$timeout_, _homeService_) {
        $timeout = _$timeout_;
        $httpBackend = _$httpBackend_;
        homeService = _homeService_;
    }));

    // Tests

});
