(function() {
  'use strict';
  angular
    .module('app')
    .controller('CoursesController',CoursesController)
    .controller('CourseNewController',CourseNewController);

  CoursesController.$inject = ['$scope', 'Course','alert', 'STATUS'];

  function CoursesController($scope, Course,alert, STATUS){
    $scope.couses = [];
    $scope.statuses = STATUS;

    Course.query(function (data) {
      $scope.courses = data.courses;
    }, function (err) {
      console.log(err);
    });

     $scope.changeStatus = function(course){
      Course.update({id: course.id, status: course.status},  course);
      alert('success','Status atualizado');
    }

    $scope.remove = function(course) {
      Course.remove({ id: course.id }, function() {
        $scope.courses.forEach(function(p, index) {
          if (p.id == course.id) $scope.courses.splice(index, 1);
        });
        alert('success', course.name + ' Removido');
      });
    }

  }

  CourseNewController.$inject = ['$scope', 'Course','$state','$stateParams', 'alert'];

  function CourseNewController($scope, Course, $state, $stateParams, alert){
    $scope.course = new Course();
    $scope.courses = [];

    if ($stateParams.id) {
      Course.get({ id: $stateParams.id}, function(data) {
        $scope.course = data.course;
      }, function(erro) {
        console.log(erro);
      });
    }

    $scope.save = function(course) {
      if ($scope.course.id) {
        Course.update({id: $scope.course.id}, $scope.course);
        $state.go('course-show');
        alert('success','Curso Atualizado com sucesso');
      } else {
        $scope.course.$save().then(function(response) {
          $scope.courses.push({response});
          $state.go('courses');
          alert('success','Curso adcionado com sucesso');
        });
      }
    }

  }

})();
