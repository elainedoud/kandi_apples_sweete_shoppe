class ReviewsController < ApplicationController

def index
    reviews = Review.all 
    render json: reviews
end

def create
    review = Review.create(review_params)
    render json: review, status: :created
end

private

def review_params
    params.permit(:candy_id, :user_id, :comment)
end

end
