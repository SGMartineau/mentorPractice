angular.module('directivePractice').directive('lessonHider', function () {
    return {
        templateUrl: 'js/lessonHider.html',
        restrict: 'E',
        scope: {
            lesson: '=',
            dayAlert: '&'
        },
        controller: function ($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule();
        },
        link: function (scope, element, attributes) {
            scope.getSchedule.then(function (response) {
                scope.schedule = response.data;
                scope.schedule.forEach(function (ele) {
                    if (ele.lesson === scope.lesson) {
                        scope.lessonDay = ele.weekday;
                        element.css('text-decoration', 'line-through');
                        return;
                    }
                })
            });
        }
    }
});