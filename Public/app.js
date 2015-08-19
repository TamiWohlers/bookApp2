var app = angular.module('bookApp2', ['ngRoute']);

    app.config(function($routeProvider, $httpProvider) {


        $routeProvider
            .when('/home', {
                templateUrl: 'Views/homeView.html',
                controller: 'homeCtrl'
            })
            .when('/toRead', {
                templateUrl: 'Views/toReadView.html',
                controller: 'toReadCtrl'
                    // resolve: {
                    // 	  teamData: function(teamService, $route) {
                    // 	  return teamService.getTeamData($route.current.params.team);
                    //   }
            })
            .when('/haveRead', {
                templateUrl: 'Views/haveReadView.html',
                controller: 'haveReadCtrl'
            })
            .when('/top10', {
                templateUrl: 'Views/top10View.html',
                controller: 'top10Ctrl'
            })
            .otherwise({
                redirectTo: '/home'
            })
});