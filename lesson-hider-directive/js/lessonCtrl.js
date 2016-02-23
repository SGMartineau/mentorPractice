angular.module('directivePractice').controller('lessonCtrl', function ($scope) {
    
    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
    
    $scope.announceDay = function(lesson, day) {
        if(day === undefined) {
            alert(lesson + ' is never active.');
        }
        alert(lesson + ' is active on ' + day + '.');
    }
    
});