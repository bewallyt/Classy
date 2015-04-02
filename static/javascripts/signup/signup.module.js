(function () {
  'use strict';

  angular
    .module('classy.signup', [
      'classy.signup.controllers',
      'classy.signup.services'
    ]);

  angular
    .module('classy.signup.controllers', ['ngDialog']);

  angular
    .module('classy.signup.services', []);
})();
