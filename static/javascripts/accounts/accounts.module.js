(function () {

  angular
    .module('classy.accounts', [
      'classy.accounts.controllers',
      'classy.accounts.services'
    ]);

  angular
    .module('classy.accounts.controllers', ['ngDialog']);

  angular
    .module('classy.accounts.services', []);

})();
