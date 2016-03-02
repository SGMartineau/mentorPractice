angular.module('myApp').controller('myCtrl', function($scope, svc){
  $scope.data= svc.getData();
})
