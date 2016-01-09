(function() {
  'use strict';
  angular
    .module('app')
    .controller('CoursesController',CoursesController)
    .controller('CourseNewController',CourseNewController);

  CoursesController.$inject = ['$scope', 'Course'];

  function CoursesController($scope, Course){
    $scope.couses = [];

    Course.query(function (data) {
      $scope.courses = data.courses;
    }, function (err) {
      console.log(err);
    });
  }

  CourseNewController.$inject = ['$scope', 'Course','$state', 'alert'];

  function CourseNewController($scope, Course, $state, alert){
    $scope.course = new Course();;
    $scope.courses =[];
    $scope.save = function(course) {
      if ($scope.course.id) {
        $scope.course.update({id: $scope.course.id}, $scope.course);
      } else {
        $scope.course.$save().then(function(response) {
          $scope.courses.push({response});
          $state.go('courses');
          alert('success','Curso adcionado com sucesso');
        });
      }
      $scope.course = new Course();
    }

  }

})();
