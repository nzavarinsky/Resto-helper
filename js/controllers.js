angular.module('app.controllers', [])



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

.controller('accountCtrl', ['$scope', '$stateParams', '$state', 'sessionService',
function ($scope, $stateParams, $state, sessionService) {


  $scope.logout = function(){
    var user = sessionService.get('user');
    user.loggedIn = false;
    sessionService.set('user', user);
    $state.go('typeOfUser');
  }


}])

.controller('ownerAccountCtrl', ['$scope', '$stateParams', '$state', 'sessionService',
function ($scope, $stateParams, $state, sessionService) {

$scope.finish = function(){
     sessionService.destroy('currentResto');
     sessionService.destroy('restorans');
     sessionService.destroy('details');
     sessionService.destroy('Street');
	   $state.go('typeOfUser');
  }

}])

.controller('newEMailCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('newPasswordCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('newPhoneNumberCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('doneCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('done2Ctrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('done3Ctrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('activation2Ctrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

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

.controller('seatsAddingCtrl', ['$scope', '$stateParams', '$ionicPopup', '$state',
function ($scope, $stateParams, $ionicPopup, $state) {
$scope.seats = function (){
  $ionicPopup.alert({
    title: 'Wait',
    template: 'Your seats will be added in 15 mins'
  });
  $state.go('order3');
}

}])

.controller('seatsAdding2Ctrl', ['$scope', '$stateParams', '$ionicPopup', '$state',
function ($scope, $stateParams, $ionicPopup, $state) {
$scope.seats = function (){
  $ionicPopup.alert({
    title: 'Wait',
    template: 'Your seats will be added in 15 mins'
  });
  $state.go('order3');
}

}])

.controller('seatsAdding3Ctrl', ['$scope', '$stateParams', '$ionicPopup', '$state',
function ($scope, $stateParams, $ionicPopup, $state) {
$scope.seats = function (){
  $ionicPopup.alert({
    title: 'Wait',
    template: 'Your seats will be added in 15 mins'
  });
  $state.go('order3');
}

}])

.controller('dishesCtrl', ['$scope', '$stateParams', '$ionicPlatform', '$window',
  function ($scope, $stateParams, $ionicPlatform, $window) {
    $ionicPlatform.ready(function($index) {
         // Ready functions
     });

     $scope.themen = [
         { name: "Borsh", status : "" ,  id: 1 },
         { name: "Varenyky",status : "", id: 2},
         { name: "Galushki",status : "", id: 3 },
         { name: "Plov", status : "", id: 4},
         { name: "Kartoplyane pure", status : "", id: 5 },
         { name: "Cake", status : "", id: 6},
         { name: "Coffee", status : "", id: 7 },
         { name: "Cappuccino", status : "", id: 8 },
         { name: "Cappuccino", status : "", id: 8 },
         { name: "Cappuccino", status : "", id: 8 },
     ];



     $scope.updateThemaLocalStorage = function ($index) {
       if ($scope.themen[$index].checked) {
         $scope.themen[$index].status = "ordered"
       }
       else {
         $scope.themen[$index].status = "unordered";
       }
         // Debug: call by index dynamically
         console.log("klicked index: " + $index);
         console.log($scope.themen[$index].name);
         console.log("current state: " + $scope.themen[$index].checked);




         // Actually doing the localStorage: set item to true/false
         console.log("recent saved state: " + $window.localStorage[ $index ]);
         $window.localStorage.setItem( $index, $scope.themen[$index].checked );

     };


     $scope.output = $window.localStorage;
     console.log($scope.output);


     $scope.getCheck = function ($index) {

         // get the stored toggle (true or false) and
         // pass it over to the ng-checked in the html
         return $window.localStorage[ $index ];
     };


  }])

.controller('addDishesCtrl', ['$scope', '$stateParams', '$ionicPlatform', '$window',
function ($scope, $stateParams, $ionicPlatform, $window) {
  $ionicPlatform.ready(function($index) {
       // Ready functions
   });

   $scope.themen = [
       { name: "Borsh", status : "" ,  id: 1 },
       { name: "Varenyky",status : "", id: 2},
       { name: "Galushki",status : "", id: 3 },
       { name: "Plov", status : "", id: 4},
       { name: "Kartoplyane pure", status : "", id: 5 },
       { name: "Cake", status : "", id: 6},
       { name: "Coffee", status : "", id: 7 },
       { name: "Cappuccino", status : "", id: 8 },
       { name: "Cappuccino", status : "", id: 8 },
       { name: "Cappuccino", status : "", id: 8 },
   ];



   $scope.updateThemaLocalStorage = function ($index) {
     if ($scope.themen[$index].checked) {
       $scope.themen[$index].status = "ordered"
     }
     else {
       $scope.themen[$index].status = "unordered";
     }
       // Debug: call by index dynamically
       console.log("klicked index: " + $index);
       console.log($scope.themen[$index].name);
       console.log("current state: " + $scope.themen[$index].checked);




       // Actually doing the localStorage: set item to true/false
       console.log("recent saved state: " + $window.localStorage[ $index ]);
       $window.localStorage.setItem( $index, $scope.themen[$index].checked );

   };


   $scope.output = $window.localStorage;
   console.log($scope.output);


   $scope.getCheck = function ($index) {

       // get the stored toggle (true or false) and
       // pass it over to the ng-checked in the html
       return $window.localStorage[ $index ];
   };


}])

.controller('addDishes2Ctrl', ['$scope', '$stateParams','$ionicPlatform', '$window',

  function ($scope, $stateParams, $ionicPlatform, $window) {
    $ionicPlatform.ready(function($index) {
         // Ready functions
     });

     $scope.themen = [
         { name: "Borsh", status : "" ,  id: 1 },
         { name: "Varenyky",status : "", id: 2},
         { name: "Galushki",status : "", id: 3 },
         { name: "Plov", status : "", id: 4},
         { name: "Kartoplyane pure", status : "", id: 5 },
         { name: "Cake", status : "", id: 6},
         { name: "Coffee", status : "", id: 7 },
         { name: "Cappuccino", status : "", id: 8 },
         { name: "Cappuccino", status : "", id: 8 },
         { name: "Cappuccino", status : "", id: 8 },
     ];



     $scope.updateThemaLocalStorage = function ($index) {
       if ($scope.themen[$index].checked) {
         $scope.themen[$index].status = "ordered"
       }
       else {
         $scope.themen[$index].status = "unordered";
       }
         // Debug: call by index dynamically
         console.log("klicked index: " + $index);
         console.log($scope.themen[$index].name);
         console.log("current state: " + $scope.themen[$index].checked);




         // Actually doing the localStorage: set item to true/false
         console.log("recent saved state: " + $window.localStorage[ $index ]);
         $window.localStorage.setItem( $index, $scope.themen[$index].checked );

     };


     $scope.output = $window.localStorage;
     console.log($scope.output);


     $scope.getCheck = function ($index) {

         // get the stored toggle (true or false) and
         // pass it over to the ng-checked in the html
         return $window.localStorage[ $index ];
     };


  }])
.controller('addDishes3Ctrl', ['$scope', '$stateParams', '$ionicPlatform', '$window',

  function ($scope, $stateParams, $ionicPlatform, $window) {
    $ionicPlatform.ready(function($index) {
         // Ready functions
     });

     $scope.themen = [
         { name: "Borsh", status : "" ,  id: 1 },
         { name: "Varenyky",status : "", id: 2},
         { name: "Galushki",status : "", id: 3 },
         { name: "Plov", status : "", id: 4},
         { name: "Kartoplyane pure", status : "", id: 5 },
         { name: "Cake", status : "", id: 6},
         { name: "Coffee", status : "", id: 7 },
         { name: "Cappuccino", status : "", id: 8 },
         { name: "Cappuccino", status : "", id: 8 },
         { name: "Cappuccino", status : "", id: 8 },
     ];



     $scope.updateThemaLocalStorage = function ($index) {
       if ($scope.themen[$index].checked) {
         $scope.themen[$index].status = "ordered"
       }
       else {
         $scope.themen[$index].status = "unordered";
       }
         // Debug: call by index dynamically
         console.log("klicked index: " + $index);
         console.log($scope.themen[$index].name);
         console.log("current state: " + $scope.themen[$index].checked);




         // Actually doing the localStorage: set item to true/false
         console.log("recent saved state: " + $window.localStorage[ $index ]);
         $window.localStorage.setItem( $index, $scope.themen[$index].checked );

     };


     $scope.output = $window.localStorage;
     console.log($scope.output);


     $scope.getCheck = function ($index) {

         // get the stored toggle (true or false) and
         // pass it over to the ng-checked in the html
         return $window.localStorage[ $index ];
     };


  }])
.controller('dishes2Ctrl', ['$scope', '$stateParams','$ionicPlatform', '$window',

  function ($scope, $stateParams, $ionicPlatform, $window) {
    $ionicPlatform.ready(function($index) {
         // Ready functions
     });

     $scope.themen = [
         { name: "Borsh", status : "" ,  id: 1 },
         { name: "Varenyky",status : "", id: 2},
         { name: "Galushki",status : "", id: 3 },
         { name: "Plov", status : "", id: 4},
         { name: "Kartoplyane pure", status : "", id: 5 },
         { name: "Cake", status : "", id: 6},
         { name: "Coffee", status : "", id: 7 },
         { name: "Cappuccino", status : "", id: 8 },
         { name: "Cappuccino", status : "", id: 8 },
         { name: "Cappuccino", status : "", id: 8 },
     ];



     $scope.updateThemaLocalStorage = function ($index) {
       if ($scope.themen[$index].checked) {
         $scope.themen[$index].status = "ordered"
       }
       else {
         $scope.themen[$index].status = "unordered";
       }
         // Debug: call by index dynamically
         console.log("klicked index: " + $index);
         console.log($scope.themen[$index].name);
         console.log("current state: " + $scope.themen[$index].checked);




         // Actually doing the localStorage: set item to true/false
         console.log("recent saved state: " + $window.localStorage[ $index ]);
         $window.localStorage.setItem( $index, $scope.themen[$index].checked );

     };


     $scope.output = $window.localStorage;
     console.log($scope.output);


     $scope.getCheck = function ($index) {

         // get the stored toggle (true or false) and
         // pass it over to the ng-checked in the html
         return $window.localStorage[ $index ];
     };


  }])

.controller('dishes3Ctrl', ['$scope', '$stateParams', '$ionicPlatform', '$window',
function ($scope, $stateParams, $ionicPlatform, $window) {
  $ionicPlatform.ready(function($index) {
       // Ready functions
   });

   $scope.themen = [
       { name: "Borsh", status : "" ,  id: 1 },
       { name: "Varenyky",status : "", id: 2},
       { name: "Galushki",status : "", id: 3 },
       { name: "Plov", status : "", id: 4},
       { name: "Kartoplyane pure", status : "", id: 5 },
       { name: "Cake", status : "", id: 6},
       { name: "Coffee", status : "", id: 7 },
       { name: "Cappuccino", status : "", id: 8 },
       { name: "Cappuccino", status : "", id: 8 },
       { name: "Cappuccino", status : "", id: 8 },
   ];



   $scope.updateThemaLocalStorage = function ($index) {
     if ($scope.themen[$index].checked) {
       $scope.themen[$index].status = "ordered"
     }
     else {
       $scope.themen[$index].status = "unordered";
     }
       // Debug: call by index dynamically
       console.log("klicked index: " + $index);
       console.log($scope.themen[$index].name);
       console.log("current state: " + $scope.themen[$index].checked);




       // Actually doing the localStorage: set item to true/false
       console.log("recent saved state: " + $window.localStorage[ $index ]);
       $window.localStorage.setItem( $index, $scope.themen[$index].checked );

   };


   $scope.output = $window.localStorage;
   console.log($scope.output);


   $scope.getCheck = function ($index) {

       // get the stored toggle (true or false) and
       // pass it over to the ng-checked in the html
       return $window.localStorage[ $index ];
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

.controller('changeNubmerOfSeatsCtrl', ['$scope', '$stateParams', '$ionicPopup', '$state',
function ($scope, $stateParams, $ionicPopup, $state) {
$scope.seats = function (){
  $ionicPopup.alert({
    title: 'Wait',
    template: 'Your seats will be added in 15 mins'
  });
  $state.go('myRestaurant');
}

}])

.controller('changeNubmerOfSeats2Ctrl', ['$scope', '$stateParams', '$ionicPopup', '$state',
function ($scope, $stateParams, $ionicPopup, $state) {
 $scope.seats = function (){
  $ionicPopup.alert({
    title: 'Wait',
    template: 'Your seats will be added in 15 mins'
  });
  $state.go('myRestaurant2');
}

}])

.controller('changeNubmerOfSeats3Ctrl', ['$scope', '$stateParams', '$ionicPopup', '$state',
function ($scope, $stateParams, $ionicPopup, $state) {
$scope.seats = function (){
  $ionicPopup.alert({
    title: 'Wait',
    template: 'Your seats will be added in 15 mins'
  });
  $state.go('myRestaurant3');
}

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
