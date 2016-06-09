/**
 * Created by manuel on 09.06.16.
 */
angular
    .module("whatapop")
    .service("categoriesService", function($http) {
        this.getCategories = function() {
            return $http.get("http://localhost:8000/api/categories");
        };
    });