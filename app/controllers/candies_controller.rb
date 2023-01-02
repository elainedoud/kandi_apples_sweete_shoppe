class CandiesController < ApplicationController

def index
    candies = Candy.all 
    render json: candies 
end

end
