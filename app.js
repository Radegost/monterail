(function () {
    "use strict";

    angular.module('app',["ui.router"])
        .config(function ($stateProvider) {
            $stateProvider
                .state('main', {
                    url: '',
                    controller: "post-controller",
                    templateUrl: 'app/views/posts.html'
                })
                .state('post', {
                    controller: "singlePost-controller",
                    url: '/post/:postid',
                    templateUrl: 'app/views/singlepost.html'
                })
                .state("otherwise", {
                    url: '',
                    templateUrl: 'app/views/posts.html'
                })
        });

})();