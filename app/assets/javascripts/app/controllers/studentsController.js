(function() {
  'use strict';
  angular
    .module('app')
    .controller('StudentsController',StudentsController)
    .controller('StudentNewController',StudentNewController)
    .controller('StudentActiveController',StudentActiveController);

  StudentsController.$inject = ['$scope', 'Student', 'STATUS','alert'];

  function StudentsController($scope, Student, STATUS,alert){
    $scope.statuses = STATUS;
    $scope.students = [];

    Student.query(function (data) {
      $scope.students = data.students;
    }, function (err) {
      console.log(err);
    });

    $scope.changeStatus = function(student){
      Student.update({id: student.id, status: student.status},  student);
      alert('success','Status atualizado');
    }

    $scope.remove = function(student) {
      Student.remove({ id: student.id }, function() {
        $scope.students.forEach(function(p, index) {
          if (p.id == student.id) $scope.students.splice(index, 1);
        });
        alert('success', student.name + ' Removido');
      });
    }

  }

  StudentNewController.$inject = ['$scope', 'Student','$state','$stateParams', 'alert'];

  function StudentNewController($scope, Student, $state, $stateParams, alert){

    $scope.student = new Student();
    $scope.students = [];

    if ($stateParams.id) {
      Student.get({ id: $stateParams.id}, function(data) {
        $scope.student = data.student;
      }, function(erro) {
        console.log(erro);
      });
    }

    $scope.save = function(student) {
      if ($scope.student.id) {
        Student.update({id: $scope.student.id}, $scope.student);
        $state.go('student-show');
        alert('success','Aluno Atualizado com sucesso');
      } else {
        $scope.student.$save().then(function(response) {
          $scope.students.push({response});
          $state.go('students');
          alert('success','Aluno adcionado com sucesso');
        });
      }
    }

  }

  StudentActiveController.$inject = ['$scope', 'Student',];

  function StudentActiveController($scope, Student){

    $scope.students = [];

    Student.student_active(function (data) {
      $scope.students = data.students;
    }, function (err) {
      console.log(err);
    });

  }

})();
