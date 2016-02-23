angular.module('apiApp').service('svc', function($q, $http) {
    this.getPokemon = function (poke) {
        var deferred = $q.defer();
        $http.get('http://pokeapi.co/api/v2/pokemon/' + poke).then(function(pokesponse) {
            var pokem = pokesponse.data;
            console.log(pokem);
            deferred.resolve(pokem);
        })
        return deferred.promise;
    }
});