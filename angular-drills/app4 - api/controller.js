angular.module('apiApp').controller('ctrl', function($scope, svc) {
    
    $scope.getPokemon = function () {
        svc.getPokemon($scope.name).then(function(reponse) {
            $scope.pokemon = reponse;
        })
    }
    
});