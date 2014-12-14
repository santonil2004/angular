var base_url = '';

var webApp = angular.module('webApp', [
    'ui.router'
]);

webApp.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
        $stateProvider
                .state('index', {
                    url: "",
                    views: {
                        "viewA": {
                            templateUrl: "partials/view1.html",
                            controller: function($scope) {
                                $scope.names = ['sanil', 'anil', 'nil'];
                            }
                        },
                        "viewB": {
                            templateUrl: "partials/view2.html",
                            controller: function($scope) {
                                $scope.names = ['mandeera', 'andeera', 'deeara'];
                            }
                        }
                    }
                })
                .state('route1', {
                    url: "/route1",
                    views: {
                        "viewA": {
                            templateUrl: "partials/view2.html",
                            controller: function($http, $scope) {
                                $http.get(base_url + 'api/request.php?request=set1').success(function(data) {
                                    $scope.names = data;
                                });
                            }
                        },
                        "viewB": {
                            templateUrl: "partials/view1.html",
                            controller: function($http, $scope) {
                                $http.get(base_url + 'api/request.php?request=set2').success(function(data) {
                                    $scope.names = data;
                                });
                            }
                        }
                    }
                })
                .state('route2', {
                    url: "/route2",
                    views: {
                        "viewA": {
                            templateUrl: "partials/view1.html",
                            controller: function($http, $scope) {
                                $http.get(base_url + 'api/request.php?request=set3').success(function(data) {
                                    $scope.names = data;
                                });
                            }
                        },
                        "viewB": {
                            templateUrl: "partials/view2.html",
                            controller: function($http, $scope) {
                                $http.get(base_url + 'api/request.php?request=set4').success(function(data) {
                                    $scope.names = data;
                                });
                            }
                        }
                    }
                });
    }]);