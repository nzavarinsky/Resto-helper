angular.module('app.controllers', []).controller('loginCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  function ($scope, $stateParams, $state, $ionicPopup) {
	  $scope.authorization = {
    username: '',
    password : ''
  };

  // we don't need this, couse when user is authorized must be redirect tot account page
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
          $state.go('restaurants');
        }
    } else {
        alert("LocalStorage not supported!");
    }
  };
}])
.controller('login2Ctrl', ['$scope', '$stateParams', '$state', '$ionicPopup',
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
