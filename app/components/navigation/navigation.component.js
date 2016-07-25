(function () {
    "use strict";
    
    /*global angular */
    angular
        .module("navigation")
        .component("navigation", {
            templateUrl: "components/navigation/navigation.template.html",
            controller: function NavigationController() {
                var self = this;
            }
        });
}());