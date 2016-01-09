class Classroom < ActiveRecord::Base
  belongs_to :student
  belongs_to :course

  before_save(:on => :create) do
    self.entry_at = Time.now
  end

end
