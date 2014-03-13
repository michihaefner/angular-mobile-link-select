var mobileSelect = angular.module('mh.mobile.selectLink', []);

var overlay = $('<div class="mh-ms-overlay-background">');
var overlayContent = $('<div class="mh-ms-overlay-content">');


/*
 * resize the popup
 */
var resizeMobileSelect = function() {
	var viewportWidth = $(window).width();
	var viewportHeight = $(window).height();

	overlay.height(viewportHeight);
	overlay.width(viewportWidth);

	var top = viewportHeight / 2;
	var marginTop = -overlayContent.height() / 2;

	overlayContent.css({ "top":  top + "px", "margin-top": marginTop + "px" });
};



/*
 * functions of the directive
 */
var mhMobileSelectController = function($scope, $element, $attrs) {
	

  $scope.msselect = function(item) {
		$scope.mslist.selected = item.id;


	};
};


mobileSelect.directive('mhMobileSelectLink', function() {
	return {
    restrict: 'A',
    scope: {
    	mslist: '='
    },
    templateUrl: 'mobile-select-link.html',
    controller: mhMobileSelectController,
    compile: function(element, attrs, transclude) {
    	// link function
    	$(window).resize(function() {
    		resizeMobileSelect();
    	});


    	return {
        pre: function preLink(scope, element, attrs, controller) { 
        	$("body").append(overlay).append(overlayContent);

          
        },
        post: function postLink(scope, element, attrs, controller) { 
        	// add list items to the overlay
        	var msOverlay = element.find(".mh-ms-overlay");
        	var msSelected = element.find(".mh-ms-selected");

        	// open the overlay
        	msSelected.on("click", function() {
      			msOverlay.appendTo(overlayContent);
      			overlay.css({ "display": "block" });
        		overlayContent.css({ "display": "block" });
        		resizeMobileSelect();
        	});     

        	// close the overlay
        	msOverlay.on("click", function() {
      			closeOverlay();
        	});	

        	overlay.on("click", function() {
        		closeOverlay();
        	});

        	var closeOverlay = function() {
						msOverlay.appendTo(element.children(".mh-ms-select"));
        		overlay.css({ "display": "none" });
        		overlayContent.css({ "display": "none" });
					}

      	  
	      }
    	}
		}
	};
});