'use strict';

angular.module('SkillsRadarApp')
  .controller('MainCtrl', function ($scope) {

    $scope.types = ["Backend", "Frontend"]

    $scope.skills = [
        {
            "name": "Rails",
            "type": "Backend"
        },
        {
            "name": "Angular",
            "type": "Frontend"
        }

    ]

    $scope.item_id = "";

    $scope.change = function() {

    };

  });
