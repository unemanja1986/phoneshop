(function () {
    "use strict";
    
    function phoneResource($resource) {
        return $resource("/api/phones/:phoneId");
    }
    
    /*global angular */
    angular
        .module("common.services")
        .factory("phoneResource", ["$resource", phoneResource]);
}());