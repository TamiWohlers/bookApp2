var app = angular.module('bookApp2', ['ui.router', 'ngAnimate', 'ui.bootstrap'])

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise(
        '/home'
    )

    $stateProvider
        .state('home', {
            url: '/home',
                    templateUrl: 'Views/homeView.html',
                    controller: 'homeCtrl'

        })
        .state('toReadView', {
            url: '/toReadView',
                    templateUrl: 'Views/toReadView.html',
                    controller: 'toReadCtrl'
        })
        .state('haveRead', {
            url: '/haveRead',
                    templateUrl: 'Views/haveReadView.html',
                    controller: 'haveReadCtrl'

        })
        .state('top10', {
            url: '/top10View',
                    templateUrl: 'Views/top10View.html',
                    controller: 'top10Ctrl'
        })
        .state('userView', {
            url: '/userView',
                    templateUrl: 'Views/userView.html',
                    controller: 'userCtrl'
        })
    

});
