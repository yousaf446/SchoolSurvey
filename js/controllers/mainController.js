define(function() {
    var coreModule = angular.module('coreModule');
    coreModule.controller('mainController', ['$scope', function($scope) {
        $scope.options = [
            {   value: 1  },
            {   value: 2  },
            {   value: 3 },
            {   value: 4   },
            {   value: 5   },
            {   value: 0    }
        ];

        $scope.optionsName = [
            {   value: 'Strongly agree'  },
            {   value: 'Agree'  },
            {   value: 'Neither agree nor disagree' },
            {   value: 'Disagree'   },
            {   value: 'Strongly disagree'   },
            {   value: 'N/A'    }
        ];
    }]);
});