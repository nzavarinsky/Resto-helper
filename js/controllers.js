angular.module('app.controllers', [])

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

.controller('myRestaurant2Ctrl', ['$scope', '$stateParams', '$state', '$ionicPopup',
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

.controller('myRestaurant3Ctrl', ['$scope', '$stateParams', '$state', '$ionicPopup',
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

.controller('addOrderCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup',
function ($scope, $stateParams, $state, $ionicPopup) {
$scope.go = function() {
  $ionicPopup.alert({
    title: 'Wait',
    template: 'Your order will be accepted in 15 mins'
  });
  $state.go('myOrders');
}

}])

.controller('MapCtrl', ['$scope','$stateParams', '$state', '$cordovaGeolocation',
  function ($scope,$stateParams, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(49.81151475, 23.98610473);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){

  var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
  });

  var infoWindow = new google.maps.InfoWindow({
      content: "Test, pizza chelentano"
  });

  google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.map, marker);
  });

});

  }, function(error){
    console.log("Could not get location");
  });

  $scope.myImage='';
    $scope.myCroppedImage='';

    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage=evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

}])

  .controller('FeedCtrl', ['$scope', '$stateParams', '$state',  'sessionService', '$ionicPopup',
    function ($scope, $stateParams, $state,  sessionService, $ionicPopup) {

  $scope.ratingFull = {};
  $scope.ratingFull.rate = 3;
  $scope.ratingFull.max = 5;

  $scope.ratingHalf = {};
  $scope.ratingHalf.rate = 3.5;
  $scope.ratingHalf.max = 5;

  $scope.reset = function(){
    $scope.ratingFull.rate = 0;
  }
    	$scope.registration = {
        email: '',
        text : '',
    };

    $scope.inputs = {
      email: '',
    	text: '',
    };


    $scope.feed = function() {


      var feed = sessionService.get('feed');
      if(!feed) {
        feed = [];
        sessionService.set('feed', feed);
      }
      feed.push($scope.inputs);
      sessionService.set('feed', feed);
      sessionService.set('text', $scope.inputs.text);
      $ionicPopup.alert({
        title: 'Yeah',
        template: 'You successfully gave us your feedback about app'
      });

      $state.go('account');
          }
          
}])
