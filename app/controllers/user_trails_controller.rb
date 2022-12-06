class UserTrailsController < ApplicationController
    def index
        render json: UserTrail.order("created_at ASC")
    end

    # def show
    #     userTrails = UserTrail.find_by(id: session[:user_id])
    #     # reviews = user.reviews
    #     render json: userTrails.trail_id.to_json(:include => :completion)
    # end

    def create
        userTrail = UserTrail.create!(userTrailParams)
        render json: userTrail.trail
    end

    def update
        userTrails = UserTrail.find_by(trail_id: params[:id])
        userTrails.update!(completion: params[:completion])
        render json: userTrails
    end

    def destroy
        userTrails = UserTrail.find_by(trail_id: params[:id])
        userTrails.destroy!
        head :no_content
    end

    private
    def userTrailParams
        params.permit(:user_id, :trail_id, :completion, :favorites)
    end
end