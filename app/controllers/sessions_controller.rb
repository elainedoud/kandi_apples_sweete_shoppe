class SessionsController < ApplicationController

    def create
        customer = Customer.find_by(username: params[:username])
        if customer&.authenticate(params[:password])
            session[:customer_id] = customer.id
            render json: customer
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :customer_id
        render json: {message: "You've been logged out"}
    end


end