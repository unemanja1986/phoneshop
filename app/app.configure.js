(function () {
    "use strict";
    
    /*global angular */
    angular
        .module("phoneStore")
        .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            
            $stateProvider
                .state("home", {
                    url: "/",
                    template: "<home-page></home-page>"
                })
                .state("phones", {
                    url: "/phones",
                    template: "<phone-page></phone-page>"
                })
                .state("computers", {
                    url: "/computers",
                    template: "<computers-page></computers-page>"
                })
                .state("laptops", {
                    url: "/laptops",
                    template: "<laptops-page></laptops-page>"
                });
        }]);
}());