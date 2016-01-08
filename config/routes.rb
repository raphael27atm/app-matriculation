Rails.application.routes.draw do
  root to: 'application#index'
  get "*path.html" => "application#index", :layout => 0
  get "*path" => "application#index"
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :students
      resources :courses
    end
  end

end
