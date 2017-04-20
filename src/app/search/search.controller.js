(function() {
    'use strict';

    angular.module('app').controller('SearchController', SearchController);

    SearchController.$inject = [ 'SearchService' ];

    function SearchController(SearchService) {

        var vm = this;

        this.search = function() {

            SearchService.search(vm.searchTerm).then(function(response) {

                vm.ticker = response.data.ticker;
                vm.price = response.data.price;

            });

        }
    }

})();
