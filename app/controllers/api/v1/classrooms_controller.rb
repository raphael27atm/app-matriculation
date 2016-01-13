module API
  module V1
    class ClassroomsController < ApiController

      def resource_class_name
        'classroom'
      end

      def matriculation
        @classroom = Classroom.all.map{ |i|
          {
            id: i.id,
            student_name: i.student.name,
            course_name: i.course.name,
            entry_at: i.entry_at
          }
        }
        render json: @classroom
      end

    end
  end
end
