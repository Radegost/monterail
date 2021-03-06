(function () {
    "use strict";

    angular.module('app',["ui.router","ui.bootstrap"])
        .config(function ($stateProvider) {
            $stateProvider
                .state('main', {
                    url: '',
                    controller: "post-controller",
                    templateUrl: 'app/views/posts.html'
                })
                .state('home', {
                    url: '/home',
                    controller: "post-controller",
                    templateUrl: 'app/views/posts.html'
                })
                .state('post', {
                    controller: "singlePost-controller",
                    url: '/post/:postid',
                    templateUrl: 'app/views/singlepost.html'
                })
                .state("otherwise", {
                    controller: "post-controller",
                    templateUrl: 'app/views/posts.html'
                })
        });

})();