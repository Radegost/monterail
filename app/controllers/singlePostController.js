(function () {
    "use strict";

    angular.module('app').controller('singlePost-controller',function ($scope, $stateParams) {
        $scope.postid = $stateParams.postid;
    });
})();