angular.module('app.controllers')
.controller('addRestaurantCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup' , 'sessionService',
function ($scope, $stateParams, $state, $ionicPopup, sessionService) {

  $scope.restaurantadding = {
tables: '',
minprice: '',
maxprice: '',
region: '',
street: '',
buildingnum: ''
};

$scope.addRestaurant = function(){


var currentResto =  sessionService.get('currentResto');
var restorans = sessionService.get('restorans');
var indexOfRestoran = 0;
var restoran = null;
for( var a = 0; a < restorans.length; a++){
    if(restorans[a].id === currentResto){
        restoran = restorans[a];
        indexOfRestoran = a;
    }
}
restorans[a] = restoran;
restorans.push($scope.restaurantadding);
sessionService.set('restorans', restorans);

$state.go('restaurants2');
}
}])
