(function () {
  'use strict';

  angular
    .module('classy.authentication', [
      'classy.authentication.controllers',
      'classy.authentication.services'
    ]);

  angular
    .module('classy.authentication.controllers', []);

  angular
    .module('classy.authentication.services', ['ngCookies']);
})();
