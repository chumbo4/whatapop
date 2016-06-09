/**
 * Created by manuel on 09.06.16.
 */
angular
    .module("whatapop")
    .service("usersService", function($http) {
        this.getUsers = function() {
            return $http.get("http://localhost:8000/api/users");
        };
    });