angular.module('app.controllers')
.controller('loginCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', 'sessionService',
function ($scope, $stateParams, $state, $ionicPopup, sessionService) {
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
        if(!$scope.authorization.username || !$scope.authorization.password ||
          $scope.authorization.username.length < 4 ||
          $scope.authorization.password.length < 4){
          $ionicPopup.alert({
           title: 'Register error!',
           template: 'Field must be 4 or more symbols'
         });
        } else {
          var savedUser = sessionService.get('user');
          if($scope.authorization.username == savedUser.email
          && $scope.authorization.password == savedUser.pass){
            savedUser.loggedIn = true;
            sessionService.set('user', savedUser);
            $state.go('restaurants');
          }
          else {
            $ionicPopup.alert({
             title: 'Wrong credentials!',
             template: 'Email or pass wrong!'
           });
          }
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
            $scope.authorization.ID ||
            $scope.authorization.password ||
            $scope.authorization.username.length < 4 ||
            $scope.authorization.password.length < 4){
            $ionicPopup.alert({
             title: 'Login error!',
             template: 'Field must be 4 or more symbols'
           });
          } else {

            var resto = sessionService.get('restorans');
            var restoData = null;

            for ( var a = 0; a < resto.length; a++){
              if (resto[a].ID == $scope.authorization.ID) {
                if(resto[a].email === $scope.authorization.username &&
                resto[a].password === $scope.authorization.username){
                  restoData = resto[a];
                  sessionService.set('currentRestoData', restoData);
                }
                else {
                  $ionicPopup.alert({
                   title: 'Login error!',
                   template: 'Pass, email or id is incorrect!',
                 })
                }
              }
            }


            // window.localStorage.setItem("username", $scope.authorization.username);
            // window.localStorage.setItem("password", $scope.authorization.password);
            // $state.go('restaurants2');
          }
      } else {
          alert("LocalStorage not supported!");
      }
    };
  }])
