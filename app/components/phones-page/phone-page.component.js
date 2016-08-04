(function () {
    "use strict";
    
    /*global angular */
    angular
        .module("phonePage")
        .component("phonePage", {
            templateUrl: "components/phones-page/phone-page.template.html",
            controller: ["phoneResource", function HomePageController(phoneResource) {
                var self = this;
                    
                phoneResource.query(function (data) {
                    self.phones = data;
                });
            }]
        });
}());