(function() {
  'use strict';
  angular
    .module('app')
    .controller('RoomsController',RoomsController)
    .controller('RoomNewController',RoomNewController);

  RoomsController.$inject = ['$scope', 'Matriculation', 'alert', 'Classroom'];

  function RoomsController($scope, Matriculation, alert, Classroom){
    $scope.classrooms = [];

    Matriculation.query(function (data) {
      $scope.classrooms = data.classrooms;
    }, function (err) {
      console.log(err);
    });

    $scope.remove = function(classroom) {
      console.log(classroom.id);
      Classroom.remove({ id: classroom.id }, function() {
        $scope.classrooms.forEach(function(p, index) {
          if (p.id == classroom.id) $scope.classrooms.splice(index, 1);
        });
        alert('success', 'Matricula Removida');
      });
    }

  }

  RoomNewController.$inject = ['$scope', 'Classroom','$state', '$stateParams','alert'];

  function RoomNewController($scope, Classroom, $state, $stateParams, alert){

    $scope.classroom = new Classroom();
    $scope.classrooms = [];

    if ($stateParams.id) {
      Classroom.get({ id: $stateParams.id}, function(data) {
        console.log(data.classroom);
        $scope.classroom = data.classroom;
      }, function(erro) {
        console.log(erro);
      });
    }

    $scope.save = function(classroom) {
      if ($scope.classroom.id) {
        Classroom.update({id: $scope.classroom.id}, $scope.classroom);
        $state.go('classroom-show');
        alert('success','Matricula atualizada com sucesso');
      } else {
        $scope.classroom.$save().then(function(response) {
          $scope.classrooms.push({response});
          $state.go('classrooms');
          alert('success','Matricula adcionada com sucesso');
        });
      }
    }

  }

})();
