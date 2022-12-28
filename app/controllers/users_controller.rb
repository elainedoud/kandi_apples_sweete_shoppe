class UsersController < ApplicationController
    #skip_before_action :authorize, only: [:create]
    
def create
    user = User.create(user_params)
    if user
        session[:user_id] = user.id 
        render json: user, status: :created
    else
        render json: {error: user.errors.full_messages}, status: :unprocessable_entity
    end
end

def show
    user = User.find_by(id: session[:user_id])
    if user
        render json: user
    else
        render json: {message: "Not logged in"}, status: :404
end

private

def user_params
    params.permit(:username, :password)
end


end