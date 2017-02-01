(function () {
    "use strict";

    angular.module('app').controller('singlePost-controller',function ($scope, $stateParams, $http) {
        $scope.postid = $stateParams.postid;
        $http.get("data/"+$stateParams.postid+".json").then(function (response) {
            $scope.post = response.data;
            console.log(response.data);
        });

        $('.button--up').on('click', function () {
            this.$scope.post.vote +=1;
            alert(this.post.vote);
            $scope.$digest();
        })
    });
})();