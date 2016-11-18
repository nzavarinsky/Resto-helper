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

$urlRouterProvider.otherwise('/usertype')

  

});