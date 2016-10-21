## AngularUI Router Breakout

Up until now we've been using the ngRoute module as our routing service. This has a lot of limitations as you might have already seen. It is the simplest way in Angular to handle client-side routing. You probably have found yourself using `ng-hide` and `ng-show` to mimic the functionality not provided to you with ngRoute such as nested views. Here we'll dive into the advantages of using a router that supports routing based on both state and behavior changes, as well as nested views. A brief example can be found [here](http://angular-ui.github.io/ui-router/sample/#/).

Just like with ngRoute, we have to bring in the external library for ui-router. This can be done with link to a CDN or with a package manager such as `npm install angular-ui-router`. Don't forget to add `'ui.router'` to your main module's list of dependencies.

When we used the ngRoute module, we had to add a directive to our HTML like `<ng-view></ng-view>` so that the templates know where to get "hot-swapped". We do the same with ui-router except the directive name is `<ui-view></ui-view>`.
