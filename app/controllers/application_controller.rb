class ApplicationController < ActionController::API
    include ActionController::Cookies
    # serialization_scope :view_context

    def current_user
        @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
    end
end
