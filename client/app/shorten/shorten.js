angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = { url : ''};
  $scope.newLink = '';

  $scope.addLink = function() {
    if($scope.newLink && $scope.newLink.length) {
      $scope.link.url = $scope.newLink;
      $scope.newLink = '';
      Links.postLink($scope.link).then(function(token) {
      });
    }
  };


});
