class Classroom < ActiveRecord::Base
  belongs_to :student
  belongs_to :course
  default_scope -> { order(:created_at => :desc)}

  before_save(:on => :create) do
    self.entry_at = Time.now
  end

end
