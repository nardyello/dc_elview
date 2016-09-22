app.controller("MenuController", ["$scope", function($scope){
     $scope.toggle = function (scope) {
         console.info(scope);
         
         
        scope.toggle( function(){
            console.info("teste");
        });
      };
    
    $scope.data = [{
        'id': 1,
        'title': 'Cadastro',
        'nodes': [
          {
            'id': 11,
            'title': 'Projetos',
            'nodes': []
          }
        ]
      }, {
        'id': 2,
        'title': 'Consulta',
        'nodes': [
          {
            'id': 21,
            'title': 'Projetos',
            'nodes': []
          }
        ]
      }, {
        'id': 3,
        'title': 'Apontamento',
        'nodes': [
          {
            'id': 31,
            'title': 'Diário',
            'nodes': []
          }
        ]
      }];
}])