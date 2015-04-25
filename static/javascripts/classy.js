(function () {
    'use strict';

    angular
        .module('classy', [
            'classy.config',
            'classy.routes',
            'classy.accounts',
            'classy.authentication',
            'classy.groups',
            'classy.layout',
            'classy.posts',
            'classy.signup',
            'classy.access',
            'classy.utils',
            'ui.bootstrap',
            'angucomplete',
            'ngMaterial',
            'ngAnimate',
            'youtube-embed'
        ]).config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue', {
                    'default': '500', // by default use shade 400 from the blue palette for primary intentions
                    'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                    'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
                })
                .accentPalette('orange');
        });

    angular
        .module('classy.config', []);

    angular
        .module('classy.routes', ['ngRoute']);

    angular
        .module('classy')
        .run(run);

    run.$inject = ['$http'];

    /**
     * @name run
     * @desc Update xsrf $http headers to align with Django's defaults
     */
    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();
