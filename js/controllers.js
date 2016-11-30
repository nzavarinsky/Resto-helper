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

.controller('login2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
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
        window.localStorage.setItem("username", $scope.authorization.username);
        window.localStorage.setItem("password", $scope.authorization.password);

       $state.go('restaurants2');
    } else {
        alert("LocalStorage not supported!");
    }
  };



}])

.controller('signUpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
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
        window.localStorage.setItem("name", $scope.registration.name);
        window.localStorage.setItem("surname", $scope.registration.surname);
		window.localStorage.setItem("email", $scope.registration.email);
		window.localStorage.setItem("pass", $scope.registration.pass);
     $state.go('activation');
    } else {
        alert("LocalStorage not supported!");
    }
  };



}])

.controller('signUp2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

function ($scope, $stateParams, $state) {
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
        window.localStorage.setItem("restaurantname", $scope.registration.restaurantname);
		window.localStorage.setItem("pass", $scope.registration.pass);
        window.localStorage.setItem("name", $scope.registration.name);
		window.localStorage.setItem("ID", $scope.registration.ID);
		window.localStorage.setItem("phone", $scope.registration.phone);
		window.localStorage.setItem("cuisine", $scope.registration.cuisine);
		window.localStorage.setItem("restauranttype", $scope.registration.restauranttype);
     $state.go('activation2');
    } else {
        alert("LocalStorage not supported!");
    }
  };

}])

.controller('activationCtrl', ['$scope', '$stateParams', '$state','sessionService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, sessionService) {
  $scope.finish = function(){
    sessionService.set('user', {first:'Taras'});
    $state.go('account');
  }

}])

.controller('activationDetailsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
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
   }

}])

.controller('restaurantsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('accountCtrl', ['$scope', '$stateParams', '$state', 'sessionService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, sessionService) {


  $scope.logout = function(){
    sessionService.destroy('user');
    $state.go('typeOfUser');
  }

}])

.controller('ownerAccountCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
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

.controller('addRestaurantCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
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

.controller('myOrdersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('orderCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('order2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('order3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('seatsAddingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('seatsAdding2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('seatsAdding3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('dishesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('addDishesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('addDishes2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('addDishes3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('dishes2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('dishes3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('restaurants2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.shouldShowDelete = false;
 $scope.shouldShowReorder = false;
 $scope.listCanSwipe = true


}])

.controller('myRestaurantCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('myRestaurant2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('myRestaurant3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('changeNubmerOfSeatsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('changeNubmerOfSeats2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('changeNubmerOfSeats3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
