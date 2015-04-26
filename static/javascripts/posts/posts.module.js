(function () {
    'use strict';

    angular
        .module('classy.posts', [
            'classy.posts.controllers',
            'classy.posts.directives',
            'classy.posts.services',
            'classy.posts.factory'
        ]);

    angular
        .module('classy.posts.controllers', []);

    angular
        .module('classy.posts.directives', ['ngDialog']);

    angular
        .module('classy.posts.services', []);

    angular
        .module('classy.posts.factory', []);

})();
