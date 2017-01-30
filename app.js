(function () {
    "use strict";

    angular.module('app',["ui.router"])
        .config(function ($stateProvider) {
            $stateProvider
                .state('main', {
                    url: '',
                    templateUrl: 'app/views/posts.html'
                })
                .state('forms', {
                    url: '/zapisy',
                    templateUrl: 'app/views/forms.html'
                })
                .state("otherwise", {
                    url: '/',
                    templateUrl: 'app/views/main.html'
                })
        });

})();