Rails.application.routes.draw do

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :students
      resources :courses
      resources :classrooms
      get :matriculation, to: 'classrooms#matriculation'
      get :course_for_student, to: 'classrooms#course_for_student'
    end
  end

  root to: 'application#index'
 # get "*path.html" => "application#index", :layout => 0
 # get "*path" => "application#index"


end
