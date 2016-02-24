angular.module('rtfm').service('threadsService', function (fb) {
    
    this.getThreads = function () {
        return new Firebase(fb.url + 'threads')
    }
    
});