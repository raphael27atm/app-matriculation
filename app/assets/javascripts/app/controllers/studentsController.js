(function() {
  'use strict';
  angular
    .module('app')
    .controller('StudentsController',StudentsController)
    .controller('StudentNewController',StudentNewController);

  StudentsController.$inject = ['$scope', 'Student', 'STATUS'];

  function StudentsController($scope, Student, STATUS){
    $scope.status = STATUS;
    $scope.students = [];

    Student.query(function (data) {
      $scope.students = data.students;
    }, function (err) {
      console.log(err);
    });
  }

  StudentNewController.$inject = ['$scope', 'Student','$state', 'alert'];

  function StudentNewController($scope, Student, $state, alert){
    $scope.student = new Student();
    $scope.students = [];
    $scope.save = function(student) {
      if ($scope.student.id) {
        Student.update({id: $scope.student.id}, $scope.student);
      } else {
        $scope.student.$save().then(function(response) {
          $scope.students.push({response});
          $state.go('students');
          alert('success','Aluno adcionado com sucesso');
        });
      }
      $scope.student = new Student();
    }

  }

})();
