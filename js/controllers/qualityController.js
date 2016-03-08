define([
        'js/services/progressService',
        'js/services/qualityService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('qualityController', ['$scope', 'progressService', 'qualityService', function($scope, progressService, qualityService) {
            $('html, body').animate({'scrollTop': $(".progress-bar").offset().top-100}, 500);
            $scope.progress = 15;
            progressService.setProgress($scope.progress);
            progressService.getProgress();

            $scope.quality = {
                care: false,
                trust: false,
                efficient: false,
                relax: false,
                appreciate: false,
                religion: false,
                forward: false,
                unappreciate: false,
                poor: false,
                pressure: false,
                inefficient: false,
                uncare: false,
                friend: false,
                communal: false,
                old: false,
                paranoid: false,
                untrust: false,
                exam: false,
                support: false,
                academic: false,
                well: false,
                bully: false,
                round: false,
                inclusive: false
            }
            $scope.quantity = 0;
            $scope.checkQuantity = function(element) {
                  if(element)  {
                      element = false;
                      $scope.quantity--;
                  } else if($scope.quantity >= 3){
                      element = false;
                  } else {
                      element = true;
                      $scope.quantity++;
                  }
                return element;
            };
            $( "#slider" ).slider({
                min: 0,
                mix: 100,
                step: 1,
                change: function( event, ui ) {
                    $scope.$apply( function() {
                        $scope.workhours = ui.value;
                    });
                }
            });
            $scope.saveQuality = function() {
                qualityService.setQuality($scope.quality);
                qualityService.setWorkhour($scope.workhours);
            };

        }]);
    });