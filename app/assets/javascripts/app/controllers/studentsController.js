(function() {
  'use strict';
  angular
    .module('app')
    .controller('StudentsController',StudentsController)
    .controller('StudentNewController',StudentNewController);

  StudentsController.$inject = ['$scope', 'Student'];

  function StudentsController($scope, Student){
    $scope.students = [];

    Student.query(function (data) {
      $scope.students = data.students;
    }, function (err) {
      console.log(err);
    });
  }

  StudentNewController.$inject = ['$scope', 'Student','$state'];

  function StudentNewController($scope, Student, $state){
    var student = []
    $scope.student = new Student();
    $scope.students = Student.query();
    $scope.save = function(student) {
      if ($scope.student.id) {
        Student.update({id: $scope.student.id}, $scope.student);
      } else {
        $scope.student.$save().then(function(response) {
          $scope.students.push(response);
        });
      }
      $scope.student = new Student();
    }

  }

})();
