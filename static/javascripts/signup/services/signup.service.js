/**
 * Signup
 * @namespace classy.signup.services
 */
(function () {
    'use strict';

    angular
        .module('classy.signup.services')
        .factory('Signup', Signup);

    Signup.$inject = ['$http'];

    /**
     * @namespace Signup
     * @returns {Factory}
     */
    function Signup($http) {
        var Signup = {
            create: create,
            get: get,
            searchSlots: searchSlots,
            confirmSlots: confirmSlots
        };

        return Signup;


        /**
         * @name create
         * @desc Create a new Post
         * @returns {Promise}
         * @memberOf classy.signup.services.Signup
         */
        function create(content, location, beginDateTimes, endDateTimes, minTimes, maxTimes, numSlotsPerUser, dayOfWeek, weekNum) {

            return $http.post('/api/v1/signup/', {
                content: content,
                location: location,
                beginDateTimes: beginDateTimes,
                endDateTimes: endDateTimes,
                minTimes: minTimes,
                maxTimes: maxTimes,
                numSlotsPerUser: numSlotsPerUser,
                dayOfWeek: dayOfWeek,
                weekNum: weekNum
            });
        }

        function get(postId){
            return $http.get('/api/v1/signup/' + postId + '/get_description/');
        }

        function searchSlots(postId, duration){
            return $http.get('/api/v1/signup/' + postId + '/get_description/' + duration +'/request/')
        }

        function confirmSlots(postId, startTimes, endTimes){
            console.log(startTimes);
            console.log(endTimes);
            return $http.post('/api/v1/signup/' + postId + '/request/', {
                    postPk: postId,
                    beginDateTimes: startTimes,
                    endDateTimes: endTimes
                }
            )

        }

    }
})();
