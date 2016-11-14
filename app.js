(function() {

    var app = angular.module('website', ['ngRoute']);
    
    app.config(['$routeProvider','$locationProvider',
      function($routeProvider,$locationProvider){
      $routeProvider.when('/writing', {
        templateUrl:'/views/writing.html',
        controller:'writingController'
      })
      .when('/paintings',{
        templateUrl:'/views/paintings.html',
        controller:'paintingsController'
      })
      .when('/books',{
        templateUrl:'/views/books.html',
        controller:'booksController'
      })
      .otherwise({redirectTo:'/'})
        }]);


app.controller('writingController', ['$scope', function($scope) {

    $scope.heading = 'Add / Edit Customer';

}]);

app.controller('paintingsController', ['$scope', function($scope){
    $scope.paintings = [{
      'title':'Nicolas Tesla',
      'img':'/images/1.jpg',
      'summary':'zzzzzzz'
      },
      {
      'title':'Ben Affleck',
      'img':'/images/2.jpg',
      'summary':'zzzzzzz'
      },
      {
      'title':'Christian Bale',
      'img':'/images/3.jpg',
      'summary':'zzzzzzz'
      },
      {
      'title':'Matt Damon',
      'img':'/images/4.jpg',
      'summary':'zzzzzzz'
      },
      {
      'title':'Robert Oppenheimer',
      'img':'/images/5.jpg',
      'summary':'zzzzzzz'
      },
      {
      'title':'Angus Deaton',
      'img':'/images/6.jpg',
      'summary':'zzzzzzz'
      },
      {
      'title':'U. Srinivas',
      'img':'/images/7.jpg',
      'summary':'zzzzzzz'
      },
      {
      'title':'Richard Feynman',
      'img':'/images/8.jpg',
      'summary':'zzzzzzz'
      }];
    
    
}]);


app.controller('booksController', ['$scope', function($scope){
    
  }
]);

 
      
}());