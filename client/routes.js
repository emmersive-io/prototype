angular.module('emmersive')
.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'client/views/projects.ng.html',
        controller: 'ProjectsController'
      }).state('new_project', {
        url: '/projects/new',
        templateUrl: 'client/views/project_new.ng.html',
        controller: 'ProjectsController'
      }).state('project',{
        url: '/projects/:id',
        templateUrl: 'client/views/project.ng.html',
        controller: 'ProjectController'
      }).state('me', {
        url: '/me',
        templateUrl: 'client/views/me.ng.html'
      }).state('home',{
        url: '/',
        templateUrl: 'client/views/home.ng.html',
        controller: function($scope, $rootScope, $location) {
          $rootScope.$location = $location;
        }
      });

    $urlRouterProvider.otherwise("/");
}]);
