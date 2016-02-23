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
            scope.toggleNow = function () {
                if (scope.toggleCss) {
                    element.css('text-decoration', 'line-through');
                } else {
                    element.css('text-decoration', 'none');
                }
            }
            scope.deleteLesson = function () {
                element.css('display', 'none');
            }
            scope.getSchedule.then(function (response) {
                scope.schedule = response.data;
                scope.schedule.forEach(function (ele) {
                    if (ele.lesson === scope.lesson) {
                        scope.lessonDay = ele.weekday;
                        element.css('text-decoration', 'line-through');
                        scope.toggleCss = true;
                        return;
                    }
                })
            });
        }
    }
});