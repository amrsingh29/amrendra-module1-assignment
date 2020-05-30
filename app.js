(function () {
    'use strict';

    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$injector = ["$scope"];

    function LunchCheckController ($scope) {
        $scope.lunchItems = "";
        $scope.message = "";

        $scope.checkLunchItems = function () {
            if ($scope.lunchItems) {
                var items = $scope.lunchItems.split(',');
                var count = items.length;

                if (count <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!"
                }

            } else {
                $scope.message = "Please enter data first";
                
            }                
            
        }
    }
})();