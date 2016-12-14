angular.module('app.controllers')

.controller('typeOfUserCtrl', ['$scope', '$stateParams', '$state', 'sessionService',
function ($scope, $stateParams, $state,  sessionService) {

  var user = sessionService.get('user');
  console.log(user);
  if (user && user.loggedIn === true) {
    $state.go('account');
  };
}])
