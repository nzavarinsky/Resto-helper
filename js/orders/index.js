angular.module('app.controllers')
.controller('myOrdersCtrl', ['$scope', '$stateParams', '$state', 'sessionService',
function ($scope, $stateParams, $state, sessionService ) {
  $scope.click = function() {
    $state.go('addOrder');
  }
  $scope.details = sessionService.get('details');
}])

.controller('orderCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup',
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

.controller('order2Ctrl', ['$scope', '$stateParams', '$state', '$ionicPopup',
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

.controller('order3Ctrl', ['$scope', '$stateParams', '$state', '$ionicPopup',
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
