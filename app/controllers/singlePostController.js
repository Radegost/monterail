(function () {
    "use strict";

    angular.module('app').controller('singlePost-controller',function ($scope, $stateParams, $http) {
        $scope.postid = $stateParams.postid;
        $http.get("data/"+$stateParams.postid+".json").then(function (response) {
            $scope.post = response.data;
            console.log(response.data);
        });
    });
})();