angular.module('app.controllers')

.controller('activationCtrl', ['$scope', '$stateParams', '$state','sessionService', '$ionicPopup',
function ($scope, $stateParams, $state, sessionService, $ionicPopup) {
    $scope.finish = function(){
      $state.go('activationDetails');
    }
    $scope.showAlert = function() {
          var alertPopup = $ionicPopup.alert({
          title: 'Wait',
          template: 'It will take 1-2 mins'
     });
     alertPopup.then(function(res) {

      });
    };
}])

.controller('activationDetailsCtrl', ['$scope', '$stateParams', '$state',

function ($scope, $stateParams, $state) {
 	 $scope.details = {
     number: '',
 	age: '',

   };

   if(typeof(Storage) != "undefined") {
       $scope.details.number = window.localStorage.getItem("number");
 	  $scope.details.age = window.localStorage.getItem("age");

   } else {
       alert("LocalStorage not supported!");
   }

   $scope.finish = function() {
     if(typeof(Storage) != "undefined") {
         window.localStorage.setItem("number", $scope.details.number);
 		window.localStorage.setItem("age", $scope.details.age);

      $state.go('restaurants');
     } else {
         alert("LocalStorage not supported!");
     }
   };
}])
