angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = { url : ''};
  $scope.newLink = ''

  $scope.addLink = function() {
    $scope.link.url = $scope.newLink;
    $scope.newLink = '';
    Links.postLink($scope.link).then(function(token) {

    });
  };


});
