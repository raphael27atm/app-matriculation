module API
  module V1
    class StudentsController < ApiController

      def resource_class_name
        'student'
      end

      def students_courses
        @classroom = Student.includes(:courses).map(&:courses )
        render json: @classroom
      end

      def student_active
        @student = Student.active
        render json: @student
      end

    end
  end
end
