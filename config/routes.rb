Rails.application.routes.draw do

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :students
      resources :courses
      resources :classrooms
      get :matriculation, to: 'classrooms#matriculation'
      get :students_courses, to: 'students#students_courses'
      get :student_active, to: 'students#student_active'
      get :course_active, to: 'courses#course_active'
    end
  end

  root to: 'application#index'
 # get "*path.html" => "application#index", :layout => 0
 # get "*path" => "application#index"


end
