var app = angular.module('shipScheduleApp', []);

app.controller('shipScheduleController', function($scope, $http) {
    $scope.showFilters = false; // alapértelmezetten a szűrőket elrejtjük
    $scope.loadSchedule = function() {
        $http.get('hajok.json')
            .then(function(response) {
                $scope.ships = response.data;
            });

        // Megjelenítjük a szűrőket
        $scope.showFilters = true;
    };

    // Szűrési logika
    $scope.filterFrom = '';
    $scope.filterTo = '';

    $scope.filterSchedule = function(ship) {
        if ($scope.filterFrom && ship.honnan.toLowerCase().indexOf($scope.filterFrom.toLowerCase()) === -1) {
            return false;
        }
        if ($scope.filterTo && ship.hova.toLowerCase().indexOf($scope.filterTo.toLowerCase()) === -1) {
            return false;
        }
        return true;
    };
});
