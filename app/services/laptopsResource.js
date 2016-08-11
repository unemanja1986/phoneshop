(function () {
    "use strict";
    
    function laptopsResource($resource) {
        return $resource("/api/laptops/:laptopId");
    }
    
    /*global angular */
    angular
        .module("common.services")
        .factory("laptopsResource", ["$resource", laptopsResource]);
}());