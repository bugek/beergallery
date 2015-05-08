(function() {
    'use strict';

    angular
        .module('bg')
        .factory('Beer', Beer);

    Beer.$inject = ['$http'];

    function Beer($http) {
        var beerFac = {
            get: get,
            add: add
        };

        return beerFac;

        function get() {
            return $http.get('/api/v1/beers').then(function(res) {
                console.log
                return res.data;
            });
        }

        function add(beers, newBeer) {
            newBeer.id = beers.length + 1;
            beers.push(newBeer)
            return beers;
        }
    }
})();
