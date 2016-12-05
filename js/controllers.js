angular.module('app.controllers', [])

.controller('typeOfUserCtrl', ['$scope', '$stateParams', '$state', 'sessionService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state,  sessionService) {

  var user = sessionService.get('user');
  console.log(user);
  if (user) {
    $state.go('account');
  };

}])

.controller('loginCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $ionicPopup) {
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
        if(!$scope.authorization.username ||
          $scope.authorization.username.length < 4 ||
          $scope.authorization.password.length < 4){
          $ionicPopup.alert({
           title: 'Register error!',
           template: 'Field must be 4 or more symbols'
         });
        } else {
          window.localStorage.setItem("username", $scope.authorization.username);
          window.localStorage.setItem("password", $scope.authorization.password);
          $state.go('restaurants');
        }
    } else {
        alert("LocalStorage not supported!");
    }
  };



}])

.controller('login2Ctrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
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
          $scope.authorization.username.length < 4 ||
          $scope.authorization.password.length < 4){
          $ionicPopup.alert({
           title: 'Register error!',
           template: 'Field must be 4 or more symbols'
         });
        } else {
          window.localStorage.setItem("username", $scope.authorization.username);
          window.localStorage.setItem("password", $scope.authorization.password);
          $state.go('restaurants2');
        }
    } else {
        alert("LocalStorage not supported!");
    }
  };




}])

.controller('signUpCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $ionicPopup) {
  	$scope.registration = {
    name: '',
    surname : '',
  	email: '',
  	pass: ''
  };

  if(typeof(Storage) != "undefined") {
      $scope.registration.name = window.localStorage.getItem("name");
      $scope.registration.surname = window.localStorage.getItem("surname");
  	  $scope.registration.email = window.localStorage.getItem("email");
  	  $scope.registration.pass = window.localStorage.getItem("pass");
  } else {
      alert("LocalStorage not supported!");
  }

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
        window.localStorage.setItem("name", $scope.registration.name);
        window.localStorage.setItem("surname", $scope.registration.surname);
    		window.localStorage.setItem("email", $scope.registration.email);
    		window.localStorage.setItem("pass", $scope.registration.pass);
        $state.go('activation');
        }
    } else {
        alert("LocalStorage not supported!");
    }
  };



}])

.controller('signUp2Ctrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

function ($scope, $stateParams, $state, $ionicPopup) {
	$scope.registration = {
  restaurantname: '',
	pass: '',
  name : '',
	ID: '',
	phone: '',
	cuisine: '',
	restauranttype: ''
  };

  if(typeof(Storage) != "undefined") {
    $scope.registration.restaurantname = window.localStorage.getItem("restaurantname");
	  $scope.registration.pass = window.localStorage.getItem("pass");
    $scope.registration.name = window.localStorage.getItem("name");
	  $scope.registration.ID = window.localStorage.getItem("ID");
	  $scope.registration.phone = window.localStorage.getItem("phone");
	  $scope.registration.cuisine = window.localStorage.getItem("cuisine");
	  $scope.registration.restauranttype = window.localStorage.getItem("restauranttype");
  } else {
      alert("LocalStorage not supported!");
  }

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
    window.localStorage.setItem("restaurantname", $scope.registration.restaurantname);
		window.localStorage.setItem("pass", $scope.registration.pass);
    window.localStorage.setItem("name", $scope.registration.name);
		window.localStorage.setItem("ID", $scope.registration.ID);
		window.localStorage.setItem("phone", $scope.registration.phone);
		window.localStorage.setItem("cuisine", $scope.registration.cuisine);
		window.localStorage.setItem("restauranttype", $scope.registration.restauranttype);
    $state.go('activation2');
        }
    } else {
        alert("LocalStorage not supported!");
    }
  };

}])

.controller('activationCtrl', ['$scope', '$stateParams', '$state','sessionService', '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, sessionService, $ionicPopup) {
  $scope.finish = function(){
    sessionService.set('user', {first:'Taras'});
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

.controller('activationDetailsCtrl', ['$scope', '$stateParams', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

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

.controller('restaurantsCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', '$ionicLoading',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $ionicPopup, $ionicLoading) {
  $scope.click = function() {
    $state.go('map');
  }

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

.controller('accountCtrl', ['$scope', '$stateParams', '$state', 'sessionService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, sessionService) {


  $scope.logout = function(){
    localStorage.clear();
    $state.go('typeOfUser');
  }


}])

.controller('ownerAccountCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {

$scope.finish = function(){
    localStorage.clear();
	$state.go('typeOfUser');
  }

}])

.controller('newEMailCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('newPasswordCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('newPhoneNumberCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('doneCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('done2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('done3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('activation2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('addRestaurantCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {

	 $scope.restaurantadding = {
    minprice: '',
	maxprice: '',
	region: '',
	street: '',
	buildingnum: ''
  };

  if(typeof(Storage) != "undefined") {
      $scope.restaurantadding.minprice = window.localStorage.getItem("minprice");
	  $scope.restaurantadding.maxprice = window.localStorage.getItem("maxprice");
	  $scope.restaurantadding.region = window.localStorage.getItem("region");
	  $scope.restaurantadding.street = window.localStorage.getItem("street");
	  $scope.restaurantadding.buildingnum = window.localStorage.getItem("buildingnum");
  } else {
      alert("LocalStorage not supported!");
  }

  $scope.AddRest = function() {
    if(typeof(Storage) != "undefined") {
		window.localStorage.setItem("minprice", $scope.restaurantadding.minprice);
		window.localStorage.setItem("maxprice", $scope.restaurantadding.maxprice);
		window.localStorage.setItem("region", $scope.restaurantadding.region);
		window.localStorage.setItem("street", $scope.restaurantadding.street);
		window.localStorage.setItem("buildingnum", $scope.restaurantadding.buildingnum);
     $state.go('restaurants-owner');
    } else {
        alert("LocalStorage not supported!");
    }
  };



}])

.controller('myOrdersCtrl', ['$scope', '$stateParams', '$state',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state ) {
  $scope.click = function() {
    $state.go('addOrder');
  }





}])

.controller('orderCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
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

.controller('order2Ctrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
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

.controller('order3Ctrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
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

.controller('seatsAddingCtrl', ['$scope', '$stateParams', '$ionicPopup', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, $state) {
$scope.seats = function (){
  $ionicPopup.alert({
    title: 'Wait',
    template: 'Your seats will be added in 15 mins'
  });
  $state.go('order3');
}

}])

.controller('seatsAdding2Ctrl', ['$scope', '$stateParams', '$ionicPopup', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, $state) {
$scope.seats = function (){
  $ionicPopup.alert({
    title: 'Wait',
    template: 'Your seats will be added in 15 mins'
  });
  $state.go('order3');
}

}])

.controller('seatsAdding3Ctrl', ['$scope', '$stateParams', '$ionicPopup', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, $state) {
$scope.seats = function (){
  $ionicPopup.alert({
    title: 'Wait',
    template: 'Your seats will be added in 15 mins'
  });
  $state.go('order3');
}

}])

.controller('dishesCtrl', ['$scope', '$stateParams', '$ionicPlatform', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
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

.controller('addDishesCtrl', ['$scope', '$stateParams', '$ionicPlatform', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
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

.controller('addDishes2Ctrl', ['$scope', '$stateParams','$ionicPlatform', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

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
.controller('addDishes3Ctrl', ['$scope', '$stateParams', '$ionicPlatform', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

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
.controller('dishes2Ctrl', ['$scope', '$stateParams','$ionicPlatform', '$window',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

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

.controller('dishes3Ctrl', ['$scope', '$stateParams', '$ionicPlatform', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
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
.controller('restaurants2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.shouldShowDelete = false;
 $scope.shouldShowReorder = false;
 $scope.listCanSwipe = true


}])

.controller('myRestaurantCtrl', ['$scope', '$stateParams','$state', '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
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

.controller('myRestaurant2Ctrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
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

.controller('myRestaurant3Ctrl', ['$scope', '$stateParams', '$state', '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
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

.controller('changeNubmerOfSeatsCtrl', ['$scope', '$stateParams', '$ionicPopup', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, $state) {
$scope.seats = function (){
  $ionicPopup.alert({
    title: 'Wait',
    template: 'Your seats will be added in 15 mins'
  });
  $state.go('myRestaurant');
}

}])

.controller('changeNubmerOfSeats2Ctrl', ['$scope', '$stateParams', '$ionicPopup', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, $state) {
 $scope.seats = function (){
  $ionicPopup.alert({
    title: 'Wait',
    template: 'Your seats will be added in 15 mins'
  });
  $state.go('myRestaurant2');
}

}])

.controller('changeNubmerOfSeats3Ctrl', ['$scope', '$stateParams', '$ionicPopup', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, $state) {
$scope.seats = function (){
  $ionicPopup.alert({
    title: 'Wait',
    template: 'Your seats will be added in 15 mins'
  });
  $state.go('myRestaurant3');
}

}])
.controller('addOrderCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
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
