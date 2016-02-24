angular.module('rtfm', [ui.router, firebase])
    
.constant('fb', {
    url: 'https://sm-forum.firebaseIO.com/'
})
    
    .config(function($stateProvider, $urlRouterProvider){
    
    
    
    $stateProvider.state('threads', {
        url: '/threads',
        templateUrl: 'threads/threads.html',
        controller: 'threadsCtrl'
    }).state('post', {
        url: '/threads/:post',
        templateUrl: 'post/post.html',
        controller: 'postCtrl'
    })
    
    $urlRouterProvider.otherwise('/threads');
    
});