'use strict';

angular.module('contactsApp')
    .controller('MainCtrl', ['$scope', 'MainSvc', 'localStorageService', function($scope, MainSvc, localStorageService) {
        var getLocalStorage = localStorageService.get('contacts');
        var addContainer = angular.element(document.querySelector('#add-container'))

        // get data from json file or local storage
        if (getLocalStorage == null || getLocalStorage.length == 0) {
            MainSvc.getContactInfo().then(function(response) {
                $scope.contactInfo = response.data;
                $scope.showButtons = true;
            });
        } else {
            $scope.contactInfo = getLocalStorage;
            $scope.showButtons = true;
        }

        // array to hold checked contacts
        $scope.checkedContacts = [];

        // loop through and add to checked contacts array
        $scope.checked = function(item) {
            if ($scope.checkedContacts.indexOf(item) === -1) {
                $scope.checkedContacts.push(item);
            } else {
                $scope.checkedContacts.splice($scope.checkedContacts.indexOf(item), 1);
            }
        }

        // delete checked items
        $scope.delete = function(index) {
            angular.forEach($scope.checkedContacts, function(value, index) {
                $scope.contactInfo.splice($scope.contactInfo.indexOf(value), 1);
                localStorageService.remove($scope.checkedContacts);
                localStorageService.set('contacts', $scope.contactInfo);
            });
            $scope.checkedContacts = [];
        };

        // add new contact
        $scope.add = function() {
            $scope.addRow = true;
            $scope.displaySave = true;
            addContainer.removeClass('slideUp').addClass('slideDown');
        };

        // save new contact to local storage
        $scope.save = function() {
            $scope.addRow = false;
            $scope.displaySave = false;
            if ($scope.item) {
                $scope.contactInfo.push($scope.item);
                localStorageService.set('contacts', $scope.contactInfo);
            }
            $scope.item = '';
            addContainer.removeClass('slideDown').addClass('slideUp');
        };

        // cancel button
        $scope.cancel = function() {
            $scope.addRow = false;
            $scope.displaySave = false;
            $scope.item = '';
            addContainer.removeClass('slideDown').addClass('slideUp');
        };
    }]);
