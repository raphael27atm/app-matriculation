class CreateClassrooms < ActiveRecord::Migration
  def change
    create_table :classrooms do |t|
      t.references :student
      t.references :course
      t.datetime :entry_at
      t.timestamps null: false
    end
    add_foreign_key :classrooms, :students,column: :student_id, on_delete: :cascade
    add_foreign_key :classrooms, :courses, column: :course_id, on_delete: :cascade
  end
end
