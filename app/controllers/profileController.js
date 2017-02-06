(function () {
    "use strict";
    angular.module('app').controller('ModalCtrl', function ($uibModal, $log, $document) {
        var $ctrl = this;

        $ctrl.animationsEnabled = true;

        $ctrl.open = function (id, parentSelector) {
            $ctrl.id = id;
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                templateUrl: 'app/templates/profile.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                appendTo: parentElem,
                resolve: {
                    id : function () {
                        return $ctrl.id;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $ctrl.selected = selectedItem;
            }, function () {
            });
        };
    });


    angular.module('app').controller('ModalInstanceCtrl', function ($uibModalInstance,$http, id) {
        var $ctrl = this;
        $http.get("data/modal"+id+".json").then(function (response) {
            $ctrl.data = response.data;
            console.log(response.data);
        });
        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });


})();
