(function() {

  'use strict';

  angular
    .module('myApp.components.about', [])
    .controller('aboutController', aboutController);

  aboutController.$inject = ['$scope'];

  function aboutController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
    this.things = ['Joe', 'Bob', 'Dave', 'Laura'];

  }

})();
