console.log("myApp loaded");

var app = angular.module('myApp', ['mh.mobile.linkSelect']);

app.controller("MainController", ['$scope', function($scope) {
  var msoptions = [
    {
    	id: 4,
      name: "Ergebnisse", 
      href: "test.html"
    },
    {
    	id: 8,
      name: "Tabelle", 
      href: "link2.html"
    },
    {
    	id: 9,
      name: "Scorer", 
      href: "link2.html"
    },
    {
    	id: 11,
      name: "Tipps", 
      href: "link2.html"
    }
  ];

  $scope.myselect = {
  	hashmap: { "4": 0, "8": 1, "9": 2, "11": 3 },
  	msoptions: msoptions,
  	selected: 9
	};
}]);