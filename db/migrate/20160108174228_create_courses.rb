class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :name
      t.string :description
      t.integer :status, default: 1
      t.timestamps null: false
    end
  end
end
