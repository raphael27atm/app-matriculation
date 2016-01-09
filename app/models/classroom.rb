class Classroom < ActiveRecord::Base
  belongs_to :student
  belongs_to :course

  before_save(:on => :create) do
    self.entry_at = Time.now
  end

  def course_student student
    self.joins(:student).where(students: {id: student.id}).map{|a| a.course.name}
  end

end
