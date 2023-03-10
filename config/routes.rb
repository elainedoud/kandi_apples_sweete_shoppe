Rails.application.routes.draw do
  
  resources :customers, only: [:create, :show]

  get "/me", to: "customers#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "customers#create"
  get "/candy", to: "candies#index"
  post "/candy", to: "candies#create"
  get "/review", to: "reviews#index"
  post "/review", to: "reviews#create"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
