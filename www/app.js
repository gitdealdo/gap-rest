var app = angular.module("myApp", ["ngRoute", "ngResource"]);

var config = {
    impUrl: 'http://192.168.122.1:9001/api/imp/',
};
app.value('config_urls', config);

// app.config(['$resourceProvider', function($resourceProvider) {
//   // Don't strip trailing slashes from calculated URLs
//   $resourceProvider.defaults.stripTrailingSlashes = false;
// }]);

