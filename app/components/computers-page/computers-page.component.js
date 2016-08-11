(function () {
    "use strict";
    
    /*global angular */
    angular
        .module("computersPage")
        .component("computersPage", {
            templateUrl: "components/computers-page/computers-page.template.html",
            controller: ["computersResource", function ComputersPageController(computersResource) {
                var self = this;
                    
                computersResource.query(function (data) {
                    self.computers = data;
                });
            }]
        });
}());