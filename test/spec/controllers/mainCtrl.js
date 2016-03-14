'use strict';

describe('Controller: MainCtrl', function() {

    // load the controller's module
    beforeEach(module('contactsApp'));

    var MainCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should make sure contact info is not empty when loaded', function() {
        expect(scope.contactInfo).to.not.be.null;
    });

    it('should save a new contact', function() {
        scope.item = {
        	Email: "Test_Email",
			Ext: "",
			Fax: "(512) 456-5555",
			Name: "Test_Name",
			Phone: "(512) 456-5555",
			Title: "Test_Title",
			Type: "Test_Type"
		};
		scope.contactInfo = [];
		scope.contactInfo.length = 1;
		scope.save();
		expect(scope.contactInfo.length).to.equal(2);
    });

    it('should not add a contact when cancelled', function() {
        scope.item = {
        	Email: "Test_Email",
			Ext: "",
			Fax: "(512) 456-5555",
			Name: "Test_Name",
			Phone: "(512) 456-5555",
			Title: "Test_Title",
			Type: "Test_Type"
		};
		scope.contactInfo = [];
		scope.contactInfo.length = 2;
		scope.cancel();
		expect(scope.contactInfo.length).to.equal(2);
    });
});
