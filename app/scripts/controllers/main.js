'use strict';

angular.module('SkillsRadarApp')
  .controller('MainCtrl', function ($scope) {

    $scope.levels = ["Novice", "Advanced beginner", "Competent", "Proficient", "Expert"]

    $scope.types = ["Backend", "Frontend", "Devops", "Mobile"]

    $scope.skills = [
        {
            "name": "Rails",
            "lastUsedAtWork": new Date("2014-08"),
            "level": "Advanced beginner",
            "type": "Backend"
        },
        {
            "name": "Sinatra",
            "level": "Competent",
            "lastUsedAtWork": new Date("2014-08"),
            "type": "Backend"
        },
        {
            "name": "Java 1.6",
            "level": "Competent",
            "lastUsedAtWork": new Date("2013-01"),
            "type": "Backend"
        },
        {
            "name": "Ruby",
            "level": "Competent",
            "lastUsedAtWork": new Date("2014-08"),
            "type": "Backend"
        },
        {
            "name": "Scala",
            "level": "Advanced beginner",
            "lastUsedAtWork": new Date("2013-12"),
            "type": "Backend"
        },

        {
            "name": "Spring",
            "level": "Competent",
            "lastUsedAtWork": new Date("2013-12"),
            "type": "Backend"
        },
        {
            "name": "Angular",
            "lastUsedAtWork": new Date("2014-08"),
            "level": "Advanced beginner",
            "type": "Frontend"
        },
        {
            "name": "JavaScript",
            "level": "Advanced beginner",
            "lastUsedAtWork": new Date("2014-08"),
            "type": "Frontend"
        },
        {
            "name": "CoffeeScript",
            "level": "Advanced beginner",
            "lastUsedAtWork": new Date("2014-08"),
            "type": "Frontend"
        },
        {
            "name": "Bootstrap",
            "level": "Advanced beginner",
            "lastUsedAtWork": new Date("2014-08"),
            "type": "Frontend"
        },
        {
            "name": "AWS EC2",
            "level": "Competent",
            "lastUsedAtWork": new Date("2014-06"),
            "type": "Devops"
        },
        {
            "name": "CloudFormation",
            "level": "Competent",
            "lastUsedAtWork": new Date("2014-06"),
            "type": "Devops"
        },
        {
            "name": "Asgard",
            "level": "Proficient",
            "lastUsedAtWork": new Date("2014-06"),
            "type": "Devops"
        },
        {
            "name": "Docker",
            "level": "Novice",
            "lastUsedAtWork": new Date("2014-06"),
            "type": "Devops"
        },
        {
            "name": "Android",
            "level": "Novice",
            "lastUsedAtWork": new Date("1900-01"),
            "type": "Mobile"
        },
        {
            "name": "iOS",
            "level": "Novice",
            "lastUsedAtWork": new Date("1900-01"),
            "type": "Mobile"
        }


    ]

    $scope.item_id = "";

    $scope.change = function() {

    };

  });
