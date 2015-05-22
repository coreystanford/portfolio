myPortfolio.controller('ContactController', ['$scope', '$http', function($scope, $http) {

  // https://scotch.io/tutorials/submitting-ajax-forms-the-angularjs-way

  $scope.formData = {};

  // process the form
  $scope.processForm = function() {

    $http.post('sendMail.php', $scope.formData).success(function(data){
      
      console.log(data);
      console.log(data.message);

      if (data.success == false) {
        // if not successful, bind errors to error variables
        //$scope.errorName = data.errors.name;
        //$scope.errorEmail = data.errors.email;
        //$scope.errorMessage = data.errors.message;
        $scope.notice = data.message;
        $scope.noticeStyle = {"color": "red"};
      } else {
        // if successful, bind success message to message
        $scope.notice = data.message;
        $scope.noticeStyle = {"color": "green"};
      }

    });

  };

}]);