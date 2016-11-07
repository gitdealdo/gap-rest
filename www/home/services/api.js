app.factory('APIMP', function($resource, config_urls){
  var url = config_urls.impUrl;
  return {
    Persona:$resource(url+"personas/:id/", {id:'@id'}, {
      'update':{method:'PUT'},
      'list':{method:'GET', isArray:true},
    }),
  };
})