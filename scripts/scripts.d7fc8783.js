"use strict";function SkillsRadarBackend(){return{rings:["Hold","Assess","Trial","Adopt"],levels:["Novice","Advanced beginner","Competent","Proficient","Expert"],types:["Backend","Frontend","Devops","Mobile"],skills:[{name:"Rails",lastUsedAtWork:new Date("2014-08"),level:"Advanced beginner",ring:"Adopt",type:"Backend"},{name:"Sinatra",level:"Competent",lastUsedAtWork:new Date("2014-08"),ring:"Adopt",type:"Backend"},{name:"Java 1.6",level:"Competent",lastUsedAtWork:new Date("2013-01"),ring:"Hold",type:"Backend"},{name:"Ruby",level:"Competent",lastUsedAtWork:new Date("2014-08"),ring:"Adopt",type:"Backend"},{name:"Scala",level:"Advanced beginner",lastUsedAtWork:new Date("2013-12"),ring:"Trial",type:"Backend"},{name:"Spring",level:"Competent",lastUsedAtWork:new Date("2013-12"),ring:"Hold",type:"Backend"},{name:"Angular",lastUsedAtWork:new Date("2014-08"),level:"Advanced beginner",ring:"Trial",type:"Frontend"},{name:"JavaScript",level:"Advanced beginner",ring:"Hold",lastUsedAtWork:new Date("2014-08"),type:"Frontend"},{name:"CoffeeScript",level:"Advanced beginner",ring:"Adopt",lastUsedAtWork:new Date("2014-08"),type:"Frontend"},{name:"Bootstrap",level:"Advanced beginner",ring:"Adopt",lastUsedAtWork:new Date("2014-08"),type:"Frontend"},{name:"AWS EC2",level:"Competent",lastUsedAtWork:new Date("2014-06"),ring:"Adopt",type:"Devops"},{name:"CloudFormation",level:"Competent",lastUsedAtWork:new Date("2014-06"),ring:"Adopt",type:"Devops"},{name:"Asgard",level:"Proficient",lastUsedAtWork:new Date("2014-06"),ring:"Hold",type:"Devops"},{name:"Docker",level:"Novice",lastUsedAtWork:new Date("2014-06"),ring:"Trial",type:"Devops"},{name:"Android",level:"Novice",lastUsedAtWork:new Date("1900-01"),ring:"Trial",type:"Mobile"},{name:"iOS",level:"Novice",ring:"Assess",lastUsedAtWork:new Date("1900-01"),type:"Mobile"}]}}angular.module("SkillsRadarApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("SkillsRadarApp").service("SkillsRadarBackend",[SkillsRadarBackend]),angular.module("SkillsRadarApp").controller("MainCtrl",["$scope","SkillsRadarBackend",function(a,b){a.levels=b.levels,a.rings=b.rings,a.types=b.types,a.skills=b.skills}]);