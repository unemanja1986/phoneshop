(function () {
    "use strict";
    
    /*global angular */
    angular
        .module("homePage")
        .component("homePage", {
            templateUrl: "components/home-page/home-page.template.html",
            controller: ["phoneResource", function HomePageController(phoneResource) {
                var self = this;
                    
                self.phone = phoneResource.get({ phoneId: 5});
            }]
        });
}());