(function() {
  'use strict';
  angular
    .module('app')
    .controller('RoomsController',RoomsController)
    .controller('RoomNewController',RoomNewController);

  RoomsController.$inject = ['$scope', 'Matriculation'];

  function RoomsController($scope, Matriculation){
    $scope.classrooms = [];

    Matriculation.query(function (data) {
      $scope.classrooms = data.classrooms;
    }, function (err) {
      console.log(err);
    });
  }

  RoomNewController.$inject = ['$scope', 'Classroom','$state', 'alert'];

  function RoomNewController($scope, Classroom, $state, alert){
    $scope.classroom = new Classroom();
    $scope.classrooms = [];
    $scope.save = function(classroom) {
      if ($scope.classroom.id) {
        Classroom.update({id: $scope.classroom.id}, $scope.classroom);
      } else {
        $scope.classroom.$save().then(function(response) {
          $scope.classrooms.push({response});
          $state.go('classrooms');
          alert('success','Aluno matriculado com sucesso');
        });
      }
      $scope.classroom = new Classroom();
    }
  }

})();
