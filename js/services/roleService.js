define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.service('roleService', function() {
        this.role;
        this.setRole = function(role) {
            this.role = role;
        };
        this.getRole = function() {
            return this.role;
        }
    });
});