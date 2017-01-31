(function () {
    "use strict";
    
    angular.module('app').controller('post-controller',function ($scope, $http, $window) {
        $http.get("data/data.json").then(function (response) {
            $scope.posts = response.data;
            console.log(response.data);
        });
        $scope.postOrder = '-date';
        $scope.postSearch = '';
        $scope.postLimit = 3;
        getLimit();

        $('#load-more').on('click',function () {
            $scope.postLimit+=1;
            $scope.$digest();
        });
        $('#search-button').on('click',function () {
            $scope.postSearch=$('#search').val();
            $scope.$digest();
        });
        $('#recent').on('click',function () {
            $scope.postOrder='-date';
            $scope.$digest();
        });
        $('#hot').on('click',function () {
            $scope.postOrder='-totalactivity';
            console.log($scope.postOrder);
            $scope.$digest();
        });
        angular.element($window).bind('resize', function(){
            getLimit();
            $scope.$digest();
        });
        function getLimit() {
            if($window.innerWidth<658){
                $scope.limit = 1;
            } else if($window.innerWidth<740){
                $scope.limit = 2;
            }
             else if($window.innerWidth<850){
                $scope.limit = 3;
            }
            else {
                $scope.limit = 4;
            }
        }
    });
})();