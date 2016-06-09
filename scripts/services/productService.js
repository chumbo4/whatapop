/**
 * Created by manuel on 09.06.16.
 */
angular
    .module("whatapop")
    .service("productService", function($http) {
        this.getProducts = function() {
            return $http.get("http://localhost:8000/api/products");
        };
    });