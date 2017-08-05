// create module
var mainApp=angular.module("mainApp",["ngRoute"]);

mainApp.config(function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl:'pages/home.html',
    controller:"mainController"
  })

  .when("/about",{
    templateUrl:"pages/about.html",
    controller:"aboutController"
  })

  .when("/contact",{
    templateUrl:"pages/contact.html",
    controller:"contactController"
  });
});
// create controller
mainApp.controller("mainController",function($scope){
  $scope.message="Welcome to home page";
});

// create controller
mainApp.controller("aboutController",function($scope){
  $scope.message="Welcome to about page";
});

// create controller
mainApp.controller("contactController",function($scope){
  $scope.message="Welcome to contact page";
});
