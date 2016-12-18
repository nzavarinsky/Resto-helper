angular.module('app.controllers')
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
