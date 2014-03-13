console.log("myApp loaded");

var app = angular.module('myApp', ['mh.mobile.linkSelect']);

app.controller("MainController", ['$scope', function($scope) {
    var msoptions = [
    {
    	id: 4,
      name: "test", 
      href: "test.html",
      selected: false
    },
    {
    	id: 8,
      name: "link2", 
      href: "link2.html",
      selected: true
    }
  ];

  $scope.myselect = {
  	hashmap: { "4": 0, "8": 1 },
  	msoptions: msoptions,
  	selected: 4
	};
}]);