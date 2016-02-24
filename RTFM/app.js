angular.module('rtfm', [ui.router, firebase]).config(function($stateProvider, $urlRouterProvider){
    
    $stateProvider.state('threads', {
        url: '/threads',
        templateUrl: 'threads.html',
        controller: 'threadsCtrl'
    }).state('post', {
        url: '/threads/:thread',
        templateUrl: 'post.html',
        controller: 'postCtrl'
    })
    
});