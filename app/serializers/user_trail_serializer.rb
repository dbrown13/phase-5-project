class UserTrailSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trail_id, :completion
end
