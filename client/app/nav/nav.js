angular.module('shortly.nav', [])

.controller('navController', function ($scope, $location) {
    $scope.pages = [];
    $scope.pages.push('signin');
    $scope.pages.push('signup');
    $scope.pages.push('links');
    $scope.pages.push('shorten');

    $scope.goTo = function(place) {
      $location.path("/"+place);
    };

});
