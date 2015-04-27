/**
 * GroupController
 * @namespace classy.Group.controllers
 */

/**
 * BENSON: FYI this code is currently superfluous..
 */
(function () {
    'use strict';

    angular
        .module('classy.groups.controllers')
        .controller('GroupController', GroupController);

    GroupController.$inject = ['$scope', '$rootScope', '$window', 'Posts', 'Authentication'];

    /**
     * @namespace GroupController
     */
    function GroupController($scope, $rootScope, $window, Posts, Authentication) {
        var vm = this;
        vm.assignments = [];


        function activate() {
            console.log('group controller activated');
            var promise = Posts.all;



            function sharedFollowingSuccessFn(data, status, headers, config) {
                console.log('fetching assignmnet');
                for (var i = 0; i < data.data.length; i++) {
                    console.log(data.data[i]);
                }
            }

            function sharedFollowingErrorFn(data, status, headers, config) {
                Snackbar.error(data.data.error);
            }
        }

    }
})();
