(function() {
    'use strict';

    angular.module('app')
            .controller('PortfolioController', PortfolioController);

    PortfolioController.$inject = [ 'PortfolioService', '$state', '$timeout',
            '$scope' ];

    function PortfolioController(PortfolioService, $state, $timeout, $scope) {

        var vm = this;
        var timeoutPromise;

        this.list = function() {

            PortfolioService.list().then(function(response) {
                vm.data = response.data;

                timeoutPromise = $timeout(vm.list, 5000);
            });
        }

        this.submit = function() {

            var data = {
                numberOfSharesOwned : vm.shares,
                companyName : vm.company,
                symbol : vm.symbol
            };

            PortfolioService.add(data).then(function(response) {
                if (response.data === true) {
                    alert('Added to portfolio');

                    vm.shares = ""
                    vm.company = ""
                    vm.symbol = ""

                } else {
                    alert("An error Occured");
                }
            });

        }

        this.remove = function(id) {

            PortfolioService.deleteRecord(id).then(function(response) {
                $state.reload();
            });

        }

        $scope.$on("$destroy", function(event) {

            $timeout.cancel(timeoutPromise);
        });

    }

})();
