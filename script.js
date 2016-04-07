// $(function(){
//
//     var gifGif = "";
//     var disGif = {};
//     var showGif = "";
//
//   $("#gifButton").on("click", function(){
//     $('section').toggle('slow');
//       getItOnThere();
//   })
//
//   function getDaGif(){
//     $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=goat').done(function(response){
//       console.log(response);
//       disGif(response);
//       showGif = disGif.data.image_url;
//       gifGif = "<img src=\"showGif\">";
//
//     })
//   };
//   function getItOnThere(){
//     $("#postItHere").append("<p> just gif it" + getDaGif());
//   }
// });

var app = angular.module('gifApp', []);
app.controller('GifController', function($scope, $http){
  $scope.gif={}
  // $scope.clickGif= false;
  $scope.addGif = function(){
    $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').then(function(response){
      $scope.clickGif = true
      console.log(response);
      $scope.gif = response.data.data;
    })
  }
})
