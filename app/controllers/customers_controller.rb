class CustomersController < ApplicationController
    
    def show
        customer = Customer.find_by!(id: session[:customer_id])
        if customer
            render json: customer
        else
            render json: {error: "Not logged in"}, status: :unauthorized
        end 
    end

    def create
        customer = Customer.create!(customer_params)
        session[:customer_id] = customer.id
        render json: customer, status: :created
    end

private

def customer_params
    params.permit(:username, :password)
end


end