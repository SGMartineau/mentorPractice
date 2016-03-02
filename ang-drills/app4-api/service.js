angular.module('myApp').service('svc', function($http, $q){
  var baseUrl = 'http://swapi.co/api/';
  this.getPeople = function(){
    var later = $q.defer();

    $http({
      method: 'GET',
      url: baseUrl + "people/"
    }).then(function(response){
      $http.get(response.data.homeworld).then(function(response2){
          console.log(response2);
        return response2;
      })
      later.resolve(response.data)
    })


    return later.promise;
  }
})
