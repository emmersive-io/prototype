angular.module('emmersive',['angular-meteor', 'ui.router', 'ngTagsInput'])
.run(['$rootScope', '$location', function($rootScope, $location){
    $rootScope.$location = $location;
}])

