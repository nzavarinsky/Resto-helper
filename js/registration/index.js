angular.module('app.controllers')
.controller('signUpCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', 'sessionService',
function ($scope, $stateParams, $state, $ionicPopup, sessionService) {
  	$scope.registration = {
      name: '',
      surname : '',
    	email: '',
    	pass: ''
  };

  $scope.signUp = function() {
    if(typeof(Storage) != "undefined") {
        if(!$scope.registration.name||
            $scope.registration.email.length < 4 ||
            $scope.registration.pass.length < 4){
            $ionicPopup.alert({
           title: 'Register error!',
           template: 'Field must be 4 or more symbols'
         });
         } else {

          var user = {
            name: $scope.registration.name,
            surname: $scope.registration.surname,
            email: $scope.registration.email,
            pass: $scope.registration.pass,
            loggedIn: true
          }
          sessionService.set('user', user);

          $state.go('activation');
        }
    } else {
        alert("LocalStorage not supported!");
    }
  };
}])

.controller('signUp2Ctrl', ['$scope', '$stateParams', '$state', '$ionicPopup',  'sessionService',
function ($scope, $stateParams, $state, $ionicPopup, sessionService) {
	$scope.registration = {
    restaurantname: '',
  	pass: '',
    email : '',
  	ID: '',
  	phone: '',
  	cuisine: '',
  	restauranttype: ''
  };


  $scope.signUp = function() {
    if(typeof(Storage) != "undefined") {
      if(!$scope.registration.restaurantname||
          $scope.registration.ID.length < 4 ||
          $scope.registration.phone.length < 4 ||
          $scope.registration.pass.length < 4){
          $ionicPopup.alert({
       title: 'Register error!',
       template: 'Field must be 4 or more symbols'
     });
     } else {

      var restorans = sessionService.get('restorans');
      if(!restorans) {
        restorans = [];
        sessionService.set('restorans', restorans);
      }
      restorans.push($scope.registration);
      sessionService.set('restorans', restorans);
      sessionService.set('currentResto', $scope.registration.ID);

      $state.go('activation2');
          }
      } else {
          alert("LocalStorage not supported!");
      }
  };

}])
