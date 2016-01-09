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

  CourseNewController.$inject = ['$scope', 'Course','$state'];

  function CourseNewController($scope, Course, $state){
    var course = []
    $scope.course = new Course();
    $scope.courses = Course.query();
    $scope.save = function(course) {
      if ($scope.course.id) {
        Course.update({id: $scope.course.id}, $scope.course);
      } else {
        $scope.course.$save().then(function(response) {
          $scope.courses.push(response);
        });
      }
      $scope.course = new Course();
    }

  }

})();
