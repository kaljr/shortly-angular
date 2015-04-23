angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $filter) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function () {
    Links.retrieveLinks().then(function (ourLinks) {
      $scope.data.links = ourLinks;
    });
  };

  $scope.goThere = function(code) {

    window.location.href = "http://localhost:3000/api/links/" + code;
    // Links.grabLink(code).then(function() {
    //   //.... something
    // });
  };

  $scope.getLinks();
});
