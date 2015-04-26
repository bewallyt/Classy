(function () {
    'use strict';

    angular
        .module('classy.posts.factory')
        .factory('PostFactory', PostFactory);

    PostFactory.$inject = [ '$timeout'];

    function PostFactory($timeout) {

        var timeIntervalInSec = 12;

        function callFnOnInterval(fn, timeInterval) {

            var promise = $timeout(fn, 100000000 * timeIntervalInSec);

            return promise.then(function () {
                callFnOnInterval(fn, timeInterval);
            });
        };

        return {
            callFnOnInterval: callFnOnInterval
        };
    }



})();
