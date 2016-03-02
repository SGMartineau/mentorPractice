angular.module('myApp').controller('myCtrl', function ($scope, svc) {

    svc.getPeople().then(function (people) {
        
        for(var i = 0; i < people.length; i++) {
            svc.getPlanet(people[i].homeworld).then(function(worldName) {
                  console.log(people)
                  $scope.people = people;
            })
        }
        
      

    })


})