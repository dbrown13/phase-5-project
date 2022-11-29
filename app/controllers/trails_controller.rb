class TrailsController < ApplicationController
    def index
        render json: Trail.order("created_at ASC")
    end

    def update
        trails = Trail.find(params[:id])
        trails.update!(favorites: params[:favorite])
        render json: trails
    end

end
