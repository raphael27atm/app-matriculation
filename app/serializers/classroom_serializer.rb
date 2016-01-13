class ClassroomSerializer < ActiveModel::Serializer
  attributes :id, :student_id, :course_id
end
