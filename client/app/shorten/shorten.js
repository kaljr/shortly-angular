angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $injector) {
  // Your code here
  $scope.link = { url : ''};
  $scope.newLink = '';
  console.log($injector);
  $scope.addLink = function() {
    if($scope.newLink && $scope.newLink.length) {
      var rx = new RegExp('http://|https://')
      if(!$scope.newLink.match(rx)) {
        $scope.newLink = 'http://' + $scope.newLink;
      }
      $scope.link.url = $scope.newLink;
      $scope.newLink = '';
      Links.postLink($scope.link).then(function(token) {
      });
    }
  };


});
