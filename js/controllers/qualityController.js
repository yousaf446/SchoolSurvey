define([
        'js/services/progressService',
        'js/services/qualityService',
        'js/services/questionService'
    ],
    function() {
        var coreModule = angular.module('coreModule');
        coreModule.controller('qualityController', ['$scope', 'progressService', 'qualityService', 'questionService',
            function($scope, progressService, qualityService, questionService) {

            if(questionService.getBehaviourQuestion() == "") {
                location.href = '#/behaviour';
            }
            $('html, body').animate({'scrollTop': $(".progress-bar").offset().top-100}, 500);
            $scope.progress = 15;
            progressService.setProgress($scope.progress);
            progressService.getProgress();

            $scope.quality = [
                {status: false, name: "Caring"},
                {status: false, name: "Trusting"},
                {status: false, name: "Efficient"},
                {status: false, name: "Relaxed"},
                {status: false, name: "Appreciative"},
                {status: false, name: "Religious"},
                {status: false, name: "Forward Thinking"},
                {status: false, name: "Unappreciative"},
                {status: false, name: "Poorly Run"},
                {status: false, name: "Pressurised"},
                {status: false, name: "Inefficient"},
                {status: false, name: "Uncaring"},
                {status: false, name: "Friendly"},
                {status: false, name: "Communal"},
                {status: false, name: "Old Fashioned"},
                {status: false, name: "Paranoid"},
                {status: false, name: "Untrusting"},
                {status: false, name: "Exam Focused"},
                {status: false, name: "Supportive"},
                {status: false, name: "Academic"},
                {status: false, name: "Well Run"},
                {status: false, name: "Bullying"},
                {status: false, name: "Rounded Education"},
                {status: false, name: "Inclusive"}
            ];
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