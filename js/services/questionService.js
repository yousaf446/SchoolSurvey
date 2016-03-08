define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('questionService', function() {
        this.personalQuestion = this.behaviourQuestion = "";
        this.setPersonalQuestion = function(personal) {
            this.personalQuestion = personal;
        };
        this.getPersonalQuestion = function() {
            return this.personalQuestion;
        }

        this.setBehaviourQuestion = function(behaviour) {
            this.behaviourQuestion = behaviour;
        };
        this.getBehaviourQuestion = function() {
            return this.behaviourQuestion;
        }
    });
});