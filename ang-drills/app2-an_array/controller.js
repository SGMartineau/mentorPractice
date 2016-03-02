angular.module('myApp').controller('myCtrl', function($scope, mySvc){
  $scope.data= mySvc.getData();
})
