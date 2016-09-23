app.controller("QuestionnaireController", ['$scope', function($scope){
  questions = [
    "Which is the highest mountain in the world?",
    "Do you have a pen?",
    "Is this a car?"
  ];

  $scope.questions = questions;
  $scope.mostrarSuporte = true

  currentQuestion = 0;

  $scope.currentQuestion = questions[currentQuestion];

  $scope.nextQuestion = function(){
    next = currentQuestion + 1;

    if (next >= questions.length){
      currentQuestion = 0;
    } else {
      currentQuestion = next;
    };

    $scope.currentQuestion = questions[currentQuestion]
  };

  $scope.reportFeedback = function(){
    $scope.mostrarSuporte = false;
  };
}])
