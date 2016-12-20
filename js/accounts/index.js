angular.module('app.controllers')
.controller('accountCtrl', ['$scope', '$stateParams', '$state', 'sessionService',
function ($scope, $stateParams, $state, sessionService) {


  $scope.logout = function(){
    var user = sessionService.get('user');
    user.loggedIn = false;
    sessionService.set('user', user);
    $state.go('typeOfUser');
  }
  $scope.feed = function () {
     $state.go('feedback');
   }
}])

.controller('ownerAccountCtrl', ['$scope', '$stateParams', '$state', 'sessionService',
function ($scope, $stateParams, $state, sessionService) {

$scope.finish = function(){
     sessionService.destroy('currentResto');
     sessionService.destroy('restorans');
     sessionService.destroy('details');
     sessionService.destroy('Street');
	   $state.go('typeOfUser');
  }


}])
