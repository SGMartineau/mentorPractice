angular.module('rtfm').controller('threadsCtrl', function($scope, threadsRef, $firebaseArray) {
    
    $scope.threads = $firebaseArray(threadsRef);
    
    $scope.createThread = function (username, title) {
        $scope.threads.$add({
            username: username,
            title: title
        })
    }
    
});