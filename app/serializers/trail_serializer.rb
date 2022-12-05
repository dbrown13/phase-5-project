class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :length, :difficulty, :user_trails

  belongs_to :location
  # has_many :usertrails, class_name: "UserTrail"

  def user_trails
    UserTrail.where(trail_id: object.id, user_id: current_user.id)
  end
end
