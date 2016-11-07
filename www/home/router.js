app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "main.html"
  })
  .when("/personas", {
      templateUrl : "home/views/personas.html"
  })
  ;
});