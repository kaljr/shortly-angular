angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function () {
    Links.retrieveLinks().then(function (ourLinks) {
      $scope.data.links = ourLinks;
    });
  };

  $scope.goThere = function(code) {
    Links.grabLink(code).then(function() {
      //.... something
    });
  };

  $scope.getLinks();
});
