class TrailsController < ApplicationController
    def index
        # user_trails = UserTrail.where(user_id: current_user.id)
        # user_trails: user_trails.as_json(include: :trail)
        render json: Trail.order("created_at ASC")
    end
end
