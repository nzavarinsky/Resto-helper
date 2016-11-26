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
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('login2', {
    url: '/ownerlogin',
    templateUrl: 'templates/login2.html',
    controller: 'login2Ctrl'
  })

  .state('signUp', {
    url: '/usersignup',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('signUp2', {
    url: '/ownersignup',
    templateUrl: 'templates/signUp2.html',
    controller: 'signUp2Ctrl'
  })

  .state('activation', {
    url: '/activationuser',
    templateUrl: 'templates/activation.html',
    controller: 'activationCtrl'
  })

  .state('activationDetails', {
    url: '/detailsuser',
    templateUrl: 'templates/activationDetails.html',
    controller: 'activationDetailsCtrl'
  })

  .state('restaurants', {
    url: '/restaurants',
    templateUrl: 'templates/restaurants.html',
    controller: 'restaurantsCtrl'
  })

  .state('account', {
    url: '/account',
    templateUrl: 'templates/account.html',
    controller: 'accountCtrl'
  })

  .state('ownerAccount', {
    url: '/owner-account',
    templateUrl: 'templates/ownerAccount.html',
    controller: 'ownerAccountCtrl'
  })

  .state('newEMail', {
    url: '/changeemail',
    templateUrl: 'templates/newEMail.html',
    controller: 'newEMailCtrl'
  })

  .state('newPassword', {
    url: '/new-password',
    templateUrl: 'templates/newPassword.html',
    controller: 'newPasswordCtrl'
  })

  .state('newPhoneNumber', {
    url: '/new-number',
    templateUrl: 'templates/newPhoneNumber.html',
    controller: 'newPhoneNumberCtrl'
  })

  .state('done', {
    url: '/done-email',
    templateUrl: 'templates/done.html',
    controller: 'doneCtrl'
  })

  .state('done2', {
    url: '/pone-password',
    templateUrl: 'templates/done2.html',
    controller: 'done2Ctrl'
  })

  .state('done3', {
    url: '/done-number',
    templateUrl: 'templates/done3.html',
    controller: 'done3Ctrl'
  })

  .state('activation2', {
    url: '/activation-owner',
    templateUrl: 'templates/activation2.html',
    controller: 'activation2Ctrl'
  })

  .state('addRestaurant', {
    url: '/add-restaurant',
    templateUrl: 'templates/addRestaurant.html',
    controller: 'addRestaurantCtrl'
  })

  .state('myOrders', {
    url: '/orders',
    templateUrl: 'templates/myOrders.html',
    controller: 'myOrdersCtrl'
  })

  .state('order', {
    url: '/order-1',
    templateUrl: 'templates/order.html',
    controller: 'orderCtrl'
  })

  .state('order2', {
    url: '/order-2',
    templateUrl: 'templates/order2.html',
    controller: 'order2Ctrl'
  })

  .state('order3', {
    url: '/order-3',
    templateUrl: 'templates/order3.html',
    controller: 'order3Ctrl'
  })

  .state('seatsAdding', {
    url: '/visitor-add-seats',
    templateUrl: 'templates/seatsAdding.html',
    controller: 'seatsAddingCtrl'
  })

  .state('seatsAdding2', {
    url: '/seats-adding-2',
    templateUrl: 'templates/seatsAdding2.html',
    controller: 'seatsAdding2Ctrl'
  })

  .state('seatsAdding3', {
    url: '/seats-adding-3',
    templateUrl: 'templates/seatsAdding3.html',
    controller: 'seatsAdding3Ctrl'
  })

  .state('dishes', {
    url: '/add-dishes visitor-1',
    templateUrl: 'templates/dishes.html',
    controller: 'dishesCtrl'
  })

  .state('addDishes', {
    url: '/owner-add-dishes-1',
    templateUrl: 'templates/addDishes.html',
    controller: 'addDishesCtrl'
  })

  .state('addDishes2', {
    url: '/owner-add-dishes-2',
    templateUrl: 'templates/addDishes2.html',
    controller: 'addDishes2Ctrl'
  })

  .state('addDishes3', {
    url: '/owner-add-dishes-3',
    templateUrl: 'templates/addDishes3.html',
    controller: 'addDishes3Ctrl'
  })

  .state('dishes2', {
    url: '/add-dishes visitor-2',
    templateUrl: 'templates/dishes2.html',
    controller: 'dishes2Ctrl'
  })

  .state('dishes3', {
    url: '/add-dishes visitor-3',
    templateUrl: 'templates/dishes3.html',
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
    templateUrl: 'templates/changeNubmerOfSeats.html',
    controller: 'changeNubmerOfSeatsCtrl'
  })

  .state('changeNubmerOfSeats2', {
    url: '/change-number-of-seats-owner2',
    templateUrl: 'templates/changeNubmerOfSeats2.html',
    controller: 'changeNubmerOfSeats2Ctrl'
  })

  .state('changeNubmerOfSeats3', {
    url: '/change-number-of-seats-owner3',
    templateUrl: 'templates/changeNubmerOfSeats3.html',
    controller: 'changeNubmerOfSeats3Ctrl'
  })

$urlRouterProvider.otherwise('/usertype')

  

});