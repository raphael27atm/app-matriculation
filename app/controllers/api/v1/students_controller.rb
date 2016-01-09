module API
  module V1
    class StudentsController < ApiController

      def resource_class_name
        'student'
      end

    end
  end
end
