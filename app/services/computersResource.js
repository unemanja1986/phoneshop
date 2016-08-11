(function () {
    "use strict";
    
    function computersResource($resource) {
        return $resource("/api/computers/:computerId");
    }
    
    /*global angular */
    angular
        .module("common.services")
        .factory("computersResource", ["$resource", computersResource]);
}());