module API
  module V1
    class CoursesController < ApiController

      def resource_class_name
        'course'
      end

      def course_active
        @course = Course.active
        render json: @course
      end

    end
  end
end
