angular.module('emmersive')
.controller('ProjectsController', ['$scope', '$meteor', '$rootScope', '$location', function ($scope, $meteor, $rootScope, $location) {
  $scope.projects = $meteor.collection(Projects);
  $scope.remove = function(project){
    $scope.projects.remove(project);
  };
}])

.controller('ProjectController', ['$scope', '$meteor', '$stateParams', '$location',
  function ($scope, $meteor, $stateParams, $location) {
    $scope.project = $meteor.object(Projects, $stateParams.id, false);

    $scope.remove = function(){
      $meteor.collection(Projects).remove($scope.project);
      $location.path('/projects');
    };

}])
