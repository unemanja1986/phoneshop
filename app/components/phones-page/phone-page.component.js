(function () {
    "use strict";
    
    /*global angular */
    angular
        .module("phonePage")
        .component("phonePage", {
            templateUrl: "components/phones-page/phone-page.template.html",
            controller: ["phoneResource", function PhonePageController(phoneResource) {
                var self = this;
                    
                phoneResource.query(function (data) {
                    self.phones = data;
                });
            }]
        });
}());