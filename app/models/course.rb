class Course < ActiveRecord::Base
  has_many :classrooms,  dependent: :delete_all
  has_many :students, through: :classrooms

  validate :name
  default_scope -> { order(:created_at => :desc)}
end
