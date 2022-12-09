class UserTrailSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trail_id, :completion, :favorites
  belongs_to :user
  belongs_to :trail
end
