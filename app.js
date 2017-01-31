(function () {
    "use strict";

    angular.module('app',["ui.router"])
        .config(function ($stateProvider) {
            $stateProvider
                .state('main', {
                    url: '',
                    templateUrl: 'app/views/singlepost.html'
                })
                .state('forms', {
                    url: '/all',
                    templateUrl: 'app/views/posts.html'
                })
                .state("otherwise", {
                    url: '/',
                    templateUrl: 'app/views/main.html'
                })
        });

})();