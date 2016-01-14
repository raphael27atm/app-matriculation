class Student < ActiveRecord::Base
  has_many :classrooms, dependent: :delete_all
  has_many :courses, through: :classrooms
  before_save :create_register_number
  validate :name

  default_scope -> { order(:created_at => :desc)}

  scope :active,->{where(status: true)}

  def create_register_number
    begin
      self.register_number = Time.now.strftime("%Y%m%T").strip().to_s.gsub(/[^\d]/, "")
    end while self.class.exists?(register_number: register_number)
  end

  private

  def ensure_not_referenced_by_anything_important
    if self.classrooms.empty?
      errors.add(:base, 'This physician cannot be deleted because appointments exist.')
      false
    end
  end

end
