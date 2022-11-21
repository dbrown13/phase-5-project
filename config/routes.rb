Rails.application.routes.draw do
  resources :locations
  resources :trails
  resources :user_trails
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
