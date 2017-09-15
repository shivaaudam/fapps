controllerModule.controller('usersCtrl', function($scope, $uibModal) {
    $scope.users = [{
        "role": "User",
        "children": [
        {"name": "Venkatesh", "Designation": "SE", "role": "user"},
        {"name": "Srikanth", "Designation": "SE", "role": "user"},
        {"name": "Naresh", "Designation": "SE", "role": "user"},
        {"name": "Abhishek", "Designation": "SE", "role": "user"}
        ]},
        {
        "role": "Admin",
        "children": [
        {"name": "Pavan", "Designation": "SE", "role": "admin"},
        {"name": "Shiva", "Designation": "SE", "role": "admin"},
        {"name": "Shamshuddin", "Designation": "SE", "role": "admin"}
        ]},
        {
        "role": "Interviewer",
        "children": [
        {"name": "Venkatesh", "Designation": "SE", "role": "interviewer"},
        {"name": "Shiva", "Designation": "SE", "role": "interviewer"},
        {"name": "Shamshuddin", "Designation": "SE", "role": "interviewer"}
        ]},
        {
        "role": "Manager",
        "children": [
        {"name": "Srikanth", "Designation": "SE", "role": "manager"},
        {"name": "Abhishek", "Designation": "SE", "role": "manager"},
        {"name": "Naresh", "Designation": "SE", "role": "manager"}
        ]}
    ];

    $scope.open = function(size,) {
        return $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/usersModal.html',
            controller: function($scope, $uibModalInstance) {
                $scope.ok = function() {
                    
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
            templateUrl: 'views/usersModal.html',
            controller: function($scope, $uibModalInstance, ajaxService, CONSTANTS) {
                $scope.username = data.name;
                $scope.department = data.Designation;
                $scope.role = data.role;
                $scope.ok = function() {
                    var postData = {};
                    postData.username = $scope.name;
                    postData.department = $scope.department;
                    postData.role = $scope.role;
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
