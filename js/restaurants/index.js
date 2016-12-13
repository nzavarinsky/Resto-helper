angular.module('app.controllers', []).controller('restaurantsCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', '$ionicLoading', 'sessionService',
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

.controller('restaurants2Ctrl', ['$scope', '$stateParams', 'sessionService',
function ($scope, $stateParams, sessionService) {

  $scope.restorans = sessionService.get('restorans');


}])

.controller('myRestaurantCtrl', ['$scope', '$stateParams','$state', '$ionicPopup',
function ($scope, $stateParams, $state, $ionicPopup) {
  $scope.cancel = function(){
    var confirmPopup = $ionicPopup.confirm({
      title: 'Are you sure',
      template: 'Do you really want to cancel order ?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
      $state.go('myOrders');
    });
  };
}])
