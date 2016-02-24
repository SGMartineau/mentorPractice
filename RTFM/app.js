angular.module('rtfm', ['ui.router', 'firebase'])

.constant('fb', {
    url: 'https://sm-forum.firebaseIO.com/'
})

.config(function ($stateProvider, $urlRouterProvider) {



    $stateProvider.state('threads', {
        url: '/threads',
        templateUrl: 'threads/threads.html',
        controller: 'threadsCtrl',
        resolve: {
            threadsRef: function (threadsService) {
                return threadsService.getThreads();
            }
        }
    })

    .state('post', {
        url: '/threads/:postId',
        templateUrl: 'post/post.html',
        controller: 'postCtrl',
        resolve: {
            postRef: function (postService, $stateParams) {
                return postService.getPost($stateParams.postId)
            },
            commentsRef: function (postService, $stateParams) {
                return postService.getComments($stateParams.postId);
            }
        },
    })
    
    .state('login', {
        url: '/login',
        controller: 'loginCtrl',
        templateUrl: '/login/login.html'
    })
    
    .state('signup', {
        url: '/signup',
        templateUrl: 'signup/signup.html',
        controller: 'signupCtrl.js'
    })

    $urlRouterProvider.otherwise('/threads');

});