class Student < ActiveRecord::Base
  has_many :classrooms, dependent: :delete_all
  has_many :courses, through: :classrooms
  before_save :create_register_number
  validate :name
  validates :register_number, uniqueness: true

  default_scope->{order(:created_at => :desc)}

  scope :active,->{where(status: true)}

  def create_register_number
    self.register_number  = loop do
      random_token = SecureRandom.uuid
      break random_token unless self.class.exists?(register_number: random_token)
    end
  end

end
