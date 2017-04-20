(function() {
    'use strict';

    angular.module('app').factory('SearchService', SearchService);

    SearchService.$inject = [ '$http' ];

    function SearchService($http) {

        var service = {

            search : search

        };

        return service;

        function search(searchString) {

            var request = $http({
                method : 'GET',
                url : 'http://localhost:8080/search?symbol=' + searchString
            });
            return request;
        }

    }
})();
