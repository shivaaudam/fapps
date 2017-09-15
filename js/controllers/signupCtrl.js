controllerModule.controller('signupCtrl', function($scope, $http, ajaxService, sha256, $state, CONSTANTS, $window) {
    $scope.height=$window.innerHeight;
    $scope.register = function() {
        var postData = {};
        postData.fname = $scope.user.firstName;
        postData.lname = $scope.user.lastName;
        postData.email = $scope.user.email;
        $scope.loading = true;
        postData.password = sha256.convertToSHA256($scope.user.password);
        var url = CONSTANTS.url+"user/saveuser";
         ajaxService.postData(postData, url).then(function(data){
            $scope.loading = false;
            $state.go('home.dashboard');
            console.log(data);
         }, function(error){
            $scope.loading = false;
            $state.go('home.dashboard');
            console.log(error);
         });
    }

    $scope.reset = function() {
        console.log($scope.user);
    };
});
