define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('progressService', function() {
        this.progress = 0;
        this.setProgress = function(progress) {
            this.progress = this.progress + progress;
        };
        this.getProgress = function() {
            $('.progress-bar').css('width', this.progress+'%').attr('aria-valuenow', this.progress);
        };
    });
});