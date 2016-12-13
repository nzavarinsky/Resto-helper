angular.module('app.controllers').controller('login2Ctrl', ['$scope', '$stateParams', '$state', '$ionicPopup',
function ($scope, $stateParams, $state, $ionicPopup) {
  	$scope.authorization = {
    username: '',
    password : ''
  };

  if(typeof(Storage) != "undefined") {
      $scope.authorization.username = window.localStorage.getItem("username");
      $scope.authorization.password = window.localStorage.getItem("password");
  } else {
      alert("LocalStorage not supported!");
  }

    $scope.signIn = function() {
    if(typeof(Storage) != "undefined") {
        if(!$scope.authorization.username ||
          $scope.authorization.username.length < 4 ||
          $scope.authorization.password.length < 4){
          $ionicPopup.alert({
           title: 'Register error!',
           template: 'Field must be 4 or more symbols'
         });
        } else {
          window.localStorage.setItem("username", $scope.authorization.username);
          window.localStorage.setItem("password", $scope.authorization.password);
          $state.go('restaurants2');
        }
    } else {
        alert("LocalStorage not supported!");
    }
  };
}])
