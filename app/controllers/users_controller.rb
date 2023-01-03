class UsersController < ApplicationController
    
    def show
        user = User.find_by!(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not logged in"}, status: :unauthorized
        end 
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

private

def user_params
    params.permit(:username, :password)
end


end