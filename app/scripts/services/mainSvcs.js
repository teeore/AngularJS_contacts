'use strict';

angular.module('contactsApp')
    .factory('MainSvc', ['$http', function($http) {
    	return {
    		getContactInfo: function() {
    			return $http.get('scripts/services/mockdata.json');
    		}
    	};     
    }]);
