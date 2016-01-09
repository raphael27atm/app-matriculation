class Student < ActiveRecord::Base
  has_many :classrooms
  has_many :courses, through: :classrooms
  before_save :create_register_number
  validate :name

  def create_register_number
    begin
      self.register_number = Time.now.strftime("%Y%m%T").strip().to_s.gsub(/[^\d]/, "")
    end while self.class.exists?(register_number: register_number)
  end

end
