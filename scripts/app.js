var app = angular.module('englishLabApp',['ngRoute']);

app.config(function($routeProvider, $locationProvider){

    $routeProvider

        //route for the home page
        .when('/',{
            templateUrl : 'pages/questionnaire.html',
            controller : 'QuestionnaireController'
        })
        .when('/summary',{
            templateUrl : 'pages/summary.html',
            controller : 'SummaryController'
        });
        //route for the Cadastro de Projetos page
        //.when('/cadastro_projetos',{
        //    templateUrl : 'pages/cadastro_projetos.html',
        //    controller : 'CadastroProjetosController'
        //})

        //.when('/cadastro_usuarios',{
          //  templateUrl: 'pages/cadastro_usuarios.html',
          //  controller: 'CadastroUsuariosController'
        //});

    $locationProvider.html5Mode(true);
});
