controllerModule.controller('loginCtrl', function($scope, ajaxService, sha256, $state, CONSTANTS,$window) {
    $scope.height=$window.innerHeight;
   $scope.login = function() {
        var postData = {};
        postData.email = $scope.register.user.email;
        $scope.loading = true;
        postData.password = sha256.convertToSHA256($scope.register.user.password);
        var url = CONSTANTS.url+"user/loginuser";
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
});