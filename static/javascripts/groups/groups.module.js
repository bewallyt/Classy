(function () {
  'use strict';

  angular
    .module('classy.groups', [
      'classy.groups.controllers',
      'classy.groups.directives',
      'classy.groups.services'
    ]);

  angular
    .module('classy.groups.controllers', ['ngDialog']);

  angular
    .module('classy.groups.directives', ['ngDialog']);

  angular
    .module('classy.groups.services', []);
})();
