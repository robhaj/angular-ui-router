## AngularUI Router Breakout

Up until now we've been using the ngRoute module as our routing service. This has a lot of limitations as you might have already seen. It's the simplest way in Angular to handle client-side routing.

You probably have found yourself using `ng-hide` and `ng-show` to mimic the functionality not provided to you with ngRoute, such as nested views. Here we'll dive into the advantages of using a router that supports routing based on state and behavior changes, as well as, nested views. A brief example can be found [here](http://angular-ui.github.io/ui-router/sample/#/).

Just like with ngRoute, we have to bring in the external library for ui-router. This can be done with link to a CDN or with a package manager such as `npm install angular-ui-router`. Here is an example script tag with the CDN already linked.
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.1/angular-ui-router.min.js"></script>

```

Don't forget to add `'ui.router'` to your main module's list of dependencies.


### ngRoute vs uiRouter
With the ngRoute module, we used the ng-view directive, `<ng-view></ng-view>`, so that the templates know where to get "hot-swapped". We do the same with ui-router except the directive name is `<ui-view></ui-view>`.

### $stateProvider && $urlRouterProvider
The service we used with ngRoute was called `$routeProvider`. With uiRouter, we'll use the `$stateProvider` and `$urlRouterProvider` services. Instead of calling the `.when()` method, where we gave it the route and a object defining the controller and template, we'll use the `.state()` method which works very similarly. Here is the snippet from the code example included in this repo.

```js
function appConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/components/main/main.view.html'
    })
    .state('home.list', {
      url: 'list',
      templateUrl: 'js/components/main/partials/_list.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'js/components/about/about.view.html'
    })
    .state('about.contacts', {
      url: '/contacts',
      templateUrl: 'js/components/about/partials/_contact.html',
      controller: 'aboutController',
      controllerAs: 'aboutCtrl'
    });
}
```

In the example above, we have the home route and about route, each with a nested route. The
