(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = [];

  function mainController() {
    /*jshint validthis: true */
    this.things = ['A', 'Set', 'Of', 'Things'];
  }

})();
