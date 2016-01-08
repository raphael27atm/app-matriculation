class Student < ActiveRecord::Base
  has_many :classrooms
  has_many :courses, through: :classrooms

  validates_presense_of :name
end
