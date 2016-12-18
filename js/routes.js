angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('typeOfUser', {
    url: '/usertype',
    templateUrl: 'templates/typeOfUser.html',
    controller: 'typeOfUserCtrl'
  })

  .state('login', {
    url: '/userlogin',
    templateUrl: 'js/logins/login.html',
    controller: 'loginCtrl'
  })

  .state('login2', {
    url: '/ownerlogin',
    templateUrl: 'js/logins/login2.html',
    controller: 'login2Ctrl'
  })

  .state('signUp', {
    url: '/usersignup',
    templateUrl: 'js/registration/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('signUp2', {
    url: '/ownersignup',
    templateUrl: 'js/registration/signUp2.html',
    controller: 'signUp2Ctrl'
  })

  .state('activation', {
    url: '/activationuser',
    templateUrl: 'js/activation/activation.html',
    controller: 'activationCtrl'
  })

  .state('activationDetails', {
    url: '/detailsuser',
    templateUrl: 'js/activation/activationDetails.html',
    controller: 'activationDetailsCtrl'
  })

  .state('restaurants', {
    url: '/restaurants',
    templateUrl: 'js/restaurants/restaurants.html',
    controller: 'restaurantsCtrl'
  })

  .state('account', {
    url: '/account',
    templateUrl: 'js/accounts/account.html',
    controller: 'accountCtrl'
  })

  .state('ownerAccount', {
    url: '/owner-account',
    templateUrl: 'js/accounts/ownerAccount.html',
    controller: 'ownerAccountCtrl'
  })

  .state('newEMail', {
    url: '/changeemail',
    templateUrl: 'js/account-edit/newEMail.html',
    controller: 'newEMailCtrl'
  })

  .state('newPassword', {
    url: '/new-password',
    templateUrl: 'js/account-edit/newPassword.html',
    controller: 'newPasswordCtrl'
  })

  .state('newPhoneNumber', {
    url: '/new-number',
    templateUrl: 'js/account-edit/newPhoneNumber.html',
    controller: 'newPhoneNumberCtrl'
  })

  .state('done', {
    url: '/done-email',
    templateUrl: 'js/account-edit/done.html',
    controller: 'doneCtrl'
  })

  .state('done2', {
    url: '/done-password',
    templateUrl: 'js/account-edit/done2.html',
    controller: 'done2Ctrl'
  })

  .state('done3', {
    url: '/done-number',
    templateUrl: 'js/account-edit/done3.html',
    controller: 'done3Ctrl'
  })

  .state('activation2', {
    url: '/activation-owner',
    templateUrl: 'js/activation/activation2.html',
    controller: 'activation2Ctrl'
  })

  .state('addRestaurant', {
    url: '/add-restaurant',
    templateUrl: 'js/addResto/addRestaurant.html',
    controller: 'addRestaurantCtrl'
  })

  .state('myOrders', {
    url: '/orders',
    templateUrl: 'js/orders/myOrders.html',
    controller: 'myOrdersCtrl'
  })

  .state('order', {
    url: '/order-1',
    templateUrl: 'js/orders/order.html',
    controller: 'orderCtrl'
  })

  .state('order2', {
    url: '/order-2',
    templateUrl: 'js/orders/order2.html',
    controller: 'order2Ctrl'
  })

  .state('order3', {
    url: '/order-3',
    templateUrl: 'js/orders/order3.html',
    controller: 'order3Ctrl'
  })

  .state('seatsAdding', {
    url: '/visitor-add-seats',
    templateUrl: 'js/restaurant-details/seatsAdding.html',
    controller: 'seatsAddingCtrl'
  })

  .state('seatsAdding2', {
    url: '/seats-adding-2',
    templateUrl: 'js/restaurant-details/seatsAdding2.html',
    controller: 'seatsAdding2Ctrl'
  })

  .state('seatsAdding3', {
    url: '/seats-adding-3',
    templateUrl: 'js/restaurant-details/seatsAdding3.html',
    controller: 'seatsAdding3Ctrl'
  })

  .state('dishes', {
    url: '/add-dishes visitor-1',
    templateUrl: 'js/restaurant-details/dishes.html',
    controller: 'dishesCtrl'
  })

  .state('addDishes', {
    url: '/owner-add-dishes-1',
    templateUrl: 'js/restaurant-details/addDishes.html',
    controller: 'addDishesCtrl'
  })

  .state('addDishes2', {
    url: '/owner-add-dishes-2',
    templateUrl: 'js/restaurant-details/addDishes2.html',
    controller: 'addDishes2Ctrl'
  })

  .state('addDishes3', {
    url: '/owner-add-dishes-3',
    templateUrl: 'js/restaurant-details/addDishes3.html',
    controller: 'addDishes3Ctrl'
  })

  .state('dishes2', {
    url: '/add-dishes visitor-2',
    templateUrl: 'js/restaurant-details/dishes2.html',
    controller: 'dishes2Ctrl'
  })

  .state('dishes3', {
    url: '/add-dishes visitor-3',
    templateUrl: 'js/restaurant-details/dishes3.html',
    controller: 'dishes3Ctrl'
  })

  .state('restaurants2', {
    url: '/restaurants-owner',
    templateUrl: 'templates/restaurants2.html',
    controller: 'restaurants2Ctrl'
  })

  .state('myRestaurant', {
    url: '/my-restaurant-1',
    templateUrl: 'templates/myRestaurant.html',
    controller: 'myRestaurantCtrl'
  })

  .state('myRestaurant2', {
    url: '/my-restaurant-2',
    templateUrl: 'templates/myRestaurant2.html',
    controller: 'myRestaurant2Ctrl'
  })

  .state('myRestaurant3', {
    url: '/my-restaurant-3',
    templateUrl: 'templates/myRestaurant3.html',
    controller: 'myRestaurant3Ctrl'
  })

  .state('changeNubmerOfSeats', {
    url: '/change-number-of-seats-owner1',
    templateUrl: 'js/restaurant-details/changeNubmerOfSeats.html',
    controller: 'changeNubmerOfSeatsCtrl'
  })

  .state('changeNubmerOfSeats2', {
    url: '/change-number-of-seats-owner2',
    templateUrl: 'js/restaurant-details/changeNubmerOfSeats2.html',
    controller: 'changeNubmerOfSeats2Ctrl'
  })

  .state('changeNubmerOfSeats3', {
    url: '/change-number-of-seats-owner3',
    templateUrl: 'js/restaurant-details/changeNubmerOfSeats3.html',
    controller: 'changeNubmerOfSeats3Ctrl'
  })
  .state('addOrder', {
    url: '/addOrder',
    templateUrl: 'templates/addOrder.html',
    controller: 'addOrderCtrl'
  })
  .state('map', {
    url: '/map',
    templateUrl: 'templates/map.html',
    controller: 'MapCtrl'
  });


$urlRouterProvider.otherwise('/usertype')



});
