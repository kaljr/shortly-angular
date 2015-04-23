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


})
.directive("unicorn", function(){
          // requires an isloated model
          return {
           // restrict to an attribute type.
           restrict: 'A',
          // element must have ng-model attribute.
             require: 'ngModel',
             link: function(scope, ele, attrs, ctrl){

                // add a parser that will process each time the value is
                // parsed into the model when the user updates it.
                var regExp = new RegExp('(https://|http://|)[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU|uk).{0,1000}');
                ctrl.$parsers.unshift(function(value) {
                  if (regExp.test(viewValue)){
                    // test and set the validity after update.
                    //var valid = value.charAt(0) == 'A' || value.charAt(0) == 'a';
                    ctrl.$setValidity('unicornvalid', false);
                  }

                  // if it's valid, return the value to the model,
                  // otherwise return undefined.
                  return valid ? value : undefined;
                });

              }
            }
});








//(http://){0,1}[a-zA-Z0-9]{0,40}\.[a-zA-Z0-9/]{0,40}\.[a-zA-Z0-9]{0,40}.+

