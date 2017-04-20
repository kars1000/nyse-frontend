(function() {
    'use strict';

    angular.module('app').factory('PortfolioService', PortfolioService);

    PortfolioService.$inject = [ '$http' ];

    function PortfolioService($http) {

        var service = {

            add : add,
            list : list,
            deleteRecord : deleteRecord

        };

        return service;

        function add(data) {

            var request = $http({
                method : 'POST',
                url : 'http://localhost:8080/portfolio',
                data : data
            });
            return request;
        }

        function list() {

            var request = $http({
                method : 'GET',
                url : 'http://localhost:8080/portfolio'
            });
            return request;

        }

        function deleteRecord(id) {

            var request = $http({
                method : 'DELETE',
                url : 'http://localhost:8080/portfolio?id=' + id
            });
            return request;

        }

    }
})();
