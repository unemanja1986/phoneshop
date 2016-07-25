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
                });
        }]);
}());