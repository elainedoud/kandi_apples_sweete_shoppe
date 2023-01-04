class CandiesController < ApplicationController

def index
    candies = Candy.all 
    render json: candies 
end

def create
    candy = Candy.create(candy_params)
    render json: candy, status: :created
end

private

def candy_params
    params.permit(:name, :image, :category)
end

end
