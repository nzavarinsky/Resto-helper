angular.module('app.controllers')
.controller('restaurantsCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', '$ionicLoading', 'sessionService',
function ($scope, $stateParams, $state, $ionicPopup, $ionicLoading, sessionService) {
  $scope.click = function() {
    $state.go('map');
  }

  $scope.restorans = sessionService.get('restorans');

  $scope.seats = function(){
  $ionicPopup.alert({
    title: 'So...',
    template: 'Available seats: NaN/NaN'
  });


}
$scope.show = function() {

   $ionicLoading.show({
     template: 'Blocking...',
     duration: 2000
   })
   .then(function(){
      console.log("Blocking");
   });
 };
 $scope.hide = function(){
     $ionicLoading.hide().then(function(){
        console.log("Blocked");
     });
   };




}])
