class ApplicationController < ActionController::API
  include ActionController::Cookies

  def check_user
    unless current_user
      render json: {error: "You are not authorized"}, status: 401
    end
  end

  def authorize
    !!current_user
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

end
