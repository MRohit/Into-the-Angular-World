// create module
// ngRoute has data about source and it's data passed as GET/POST
var mainApp=angular.module("mainApp",["ngRoute"]);

mainApp.config(function($routeProvider){
  $routeProvider
  .when('/home',{ // use to navigate to appropriate controller and it's page
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
