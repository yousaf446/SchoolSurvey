define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('qualityService', function() {
        this.quality = this.workhours = "";
        this.setQuality = function(quality) {
            this.quality = quality;
        };
        this.getQuality = function() {
            return this.quality;
        }

        this.setWorkhour = function(workhours) {
            this.workhours = workhours;
        };
        this.getWorkhour = function() {
            return this.workhours;
        }
    });
});