app.controller('PersonasCtrl', function($scope, APIMP){
  function listar_personas() {
    APIMP.Persona.list().$promise.then(function (r) {
      $scope.personas = r;
    }, function (err) {
      console.log(err);
    })
  }
  listar_personas();

})