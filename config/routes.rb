Rails.application.routes.draw do
  resources :locations
  resources :trails
  resources :user_trails
  resources :users

  get "/me", to: "users#show"

  post "/register", to: "users#register"

  patch "/updateUser", to: "users#update"

  post "/login", to: "sessions#create"
  
  delete "/logout", to: "sessions#destroy"



  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
