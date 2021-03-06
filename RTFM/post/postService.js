angular.module('rtfm').service('postService', function (fb) {
    
    this.getPost = function (postId) {
        return new Firebase(fb.url + 'threads/' + postId)
    }
    
    this.getComments = function (postId) {
        return new Firebase(fb.url + 'threads/' + postId + '/comments');
    }
    
})