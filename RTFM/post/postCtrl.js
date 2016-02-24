angular.module('rtfm').controller('postCtrl', function ($scope, postRef, $firebaseObject, commentsRef, $firebaseArray) {
    
    var post = $firebaseObject(postRef);
    post.$bindTo($scope, 'post');
    
    $scope.comments = $firebaseArray(commentsRef);
    
    $scope.createComment = function (username, text) {
        $scope.comments.$add({
            username: username,
            text: text
        })
    }
    
});