(function () {
    "use strict";
    
    /*global angular */
    angular
        .module("phoneStore", 
        	[
        		"common.services", 
        		"ui.router", 
        		"phoneResourceMock", 
        		"navigation", 
        		"homePage", 
        		"phonePage", 
        		"computersPage"
        	]);
}());