module API
  module V1
    class ClassroomsController < ApiController

      def resource_class_name
        'classroom'
      end

      def matriculation
        @classroom = Classroom.all.map{|a| [a.id, a.student.name, a.course.name, a.entry_at]}
        render json: @classroom
      end

    end
  end
end
