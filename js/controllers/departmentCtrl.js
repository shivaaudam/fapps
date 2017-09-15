controllerModule.controller('departmentCtrl', function($scope, $uibModal, ajaxService, CONSTANTS) {

    $scope.department = [{
        id: 1,
        departname: "UI"
    }, {
        id: 2,
        departname: "Java"
    }, {
        id: 3,
        departname: "SST"
    }];

    $scope.open = function(size) {
        return $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/departmentModal.html',
            controller: function($scope, $uibModalInstance, ajaxService, CONSTANTS) {
                $scope.ok = function() {
                    var postData = {};
                    postData.department = $scope.departmentName;
                    var url = CONSTANTS.url+"user/loginuser";
                    ajaxService.postData(postData, url).then(function(data) {
                        $uibModalInstance.dismiss('cancel');
                    }, function(error) {
                        $uibModalInstance.dismiss('cancel');
                    });
                };

                $scope.cancel = function() {
                    $uibModalInstance.dismiss('cancel');
                };
            },
            size: size
        });
    }

    $scope.edit =function(data){
        return $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/departmentModal.html',
            controller: function($scope, $uibModalInstance, ajaxService, CONSTANTS) {
                $scope.departmentName = data.departname;
                $scope.id = data.id;
                $scope.ok = function() {
                    var postData = {};
                    postData.department = $scope.departmentName;
                    postData.id = $scope.id;
                    var url = CONSTANTS.url+"user/loginuser";
                    ajaxService.postData(postData, url).then(function(data) {
                        $uibModalInstance.dismiss('cancel');
                    }, function(error) {
                        $uibModalInstance.dismiss('cancel');
                    });
                };

                $scope.cancel = function() {
                    $uibModalInstance.dismiss('cancel');
                };
            }
        });
    }

});
