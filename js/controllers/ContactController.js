myPortfolio.controller('ContactController', ['$scope', '$http', function($scope, $http) {

  // https://scotch.io/tutorials/submitting-ajax-forms-the-angularjs-way

  $scope.formData = {};

  // process the form
  $scope.processForm = function() {
    $http({
    method  : 'POST',
    url     : 'mail.php',
    data    : $.param($scope.formData),  // pass in data as strings
    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
   })
    .success(function(data) {
      console.log(data);

      if (!data.success) {
        // if not successful, bind errors to error variables
        $scope.errorName = data.errors.name;
        $scope.errorEmail = data.errors.email;
        $scope.errorMessage = data.errors.message;
      } else {
        // if successful, bind success message to message
        $scope.message = data.message;
      }
    });
};
}]);