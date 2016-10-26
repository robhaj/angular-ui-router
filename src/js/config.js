(function() {

  'use strict';

  angular
    .module('myApp.config', ['ui.router'])
    .config(appConfig);

  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/components/main/main.view.html'
      })
      .state('home.list', {
        templateUrl: 'js/components/main/partials/_list.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'js/components/about/about.view.html'
      })
      .state('about.contacts', {
        templateUrl: 'js/components/about/partials/_contact.html',
        controller: 'aboutController',
        controllerAs: 'aboutCtrl'
      });
  }
})();
