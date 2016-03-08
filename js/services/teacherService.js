define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('teacherService', function() {
        this.teacher = "";
        this.setTeacher = function(teacher) {
            this.teacher = teacher;
        };
        this.getTeacher = function() {
            return this.teacher;
        }
    });
});