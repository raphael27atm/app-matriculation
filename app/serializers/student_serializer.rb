class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :register_number, :status
  has_many :courses
end
