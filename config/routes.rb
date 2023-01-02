Rails.application.routes.draw do
  
  resources :users, only: [:create, :show]

  resources :candies, only: [:index]

  get "/me", to: "users#show"
  get "/me", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  get "/candy", to: "candies#index"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
