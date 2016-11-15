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
      'img':'/images/1.jpg'
      },
      {
      'title':'Ben Affleck',
      'img':'/images/2.jpg'
      },
      {
      'title':'Christian Bale',
      'img':'/images/3.jpg'
      },
      {
      'title':'Matt Damon',
      'img':'/images/4.jpg'
      },
      {
      'title':'Robert Oppenheimer',
      'img':'/images/5.jpg'
      },
      {
      'title':'Angus Deaton',
      'img':'/images/6.jpg'
      },
      {
      'title':'U. Srinivas',
      'img':'/images/7.jpg'
      },
      {
      'title':'Richard Feynman',
      'img':'/images/8.jpg'
      }];
    
    
}]);


app.controller('booksController', ['$scope', function($scope){
    $scope.books = [{
      'title':'India After Gandhi',
      'img':'/images/b1.jpg',
      'author':'Ramchandra Guha'
      },
      {
      'title':'Gandhi Before India',
      'img':'/images/b2.jpg',
      'author':'Ramchandra Guha'
      },
      {
      'title':'Wings of Fire: An Autobiography',
      'img':'/images/b3.jpg',
      'author':'Kalam, A.P.J. Abdul'
      },
      {
      'title':'Inferno',
      'img':'/images/b4.jpg',
      'author':'Dan Brown'
      },
      {
      'title':'The White Tiger',
      'img':'/images/b5.jpg',
      'author':'Aravind Adiga'
      },
      {
      'title':'The Glass Palace',
      'img':'/images/b6.jpg',
      'author':'Amitav Ghosh'
      },
      {
      'title':'Quiet: The power of introverts in a world that cant stop speaking',
      'img':'/images/b7.jpg',
      'author':'Susan Caine'
      },
      {
      'title':'The Pleasure of Finding Things Out: The Best Short Works of Richard Feynman',
      'img':'/images/b8.jpg',
      'author':'Carl Feynman and Richard Feynman'
      },
      {
      'title':'Surely You are Joking, Mr. Feynman!: Adventures of a Curious Character',
      'img':'/images/b9.jpg',
      'author':'zzzzzzz'
      },
      {
      'title':'The World Is Flat: A Brief History of the Twenty-first Century',
      'img':'/images/b10.jpg',
      'author':'Friedman, Thomas L.'
      },
      {
      'title':'The Complete Calvin and Hobbes',
      'img':'/images/b11.jpg',
      'author':'Watterson, Bill'
      },
      {
      'title':'Kim',
      'img':'/images/b12.jpg',
      'author':'Kipling, Rudyard'
      },
      {
      'title':'The Complete Sherlock Holmes',
      'img':'/images/b13.jpg',
      'author':'Doyle, Arthur Conan'
      },
      {
      'title':'The Monk Who Sold His Ferrari ',
      'img':'/images/b14.jpg',
      'author':'Sharma, Robin S.'
      },
      {
      'title':'The Da Vinci Code ',
      'img':'/images/b15.jpg',
      'author':'Brown, Dan'
      },
      {
      'title':'Digital Fortress ',
      'img':'/images/b16.jpg',
      'author':'Brown, Dan'
      },
      {
      'title':'The Lost Symbol',
      'img':'/images/b17.jpg',
      'author':'Brown, Dan'
      },
      {
      'title':'The Alchemist',
      'img':'/images/b18.jpg',
      'author':'Coelho, Paulo'
      },
      
      {
      'title':'Deception Point ',
      'img':'/images/b19.jpg',
      'author':'Brown, Dan'
      },
      {
      'title':'How to Win Friends and Influence People',
      'img':'/images/b20.jpg',
      'author':'Carnegie, Dale'
      },
      {
      'title':'Managing Oneself',
      'img':'/images/b21.jpg',
      'author':'Drucker, Peter F.'
      },
      {
      'title':'Five Point Someone',
      'img':'/images/b22.jpg',
      'author':'Bhagat, Chetan'
      },
      {
      'title':'Rich Dad, Poor Dad',
      'img':'/images/b23.jpg',
      'author':'Robert T.Kiyosaki'
      }];
    
    
}]);

 
      
}());