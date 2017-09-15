controllerModule.controller('homeCtrl', function($scope, $cookieStore, $state, $window) {
	$scope.height=$window.innerHeight;
    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

});
