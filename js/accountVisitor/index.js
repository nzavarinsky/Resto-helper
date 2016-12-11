angular.module('app.controllers', []).controller('accountCtrl', ['$scope', '$state', 'sessionService',
function ($scope, $state, sessionService) {
  $scope.logout = function(){
    sessionService.destroy('user');
    $state.go('typeOfUser');
  }
}])
