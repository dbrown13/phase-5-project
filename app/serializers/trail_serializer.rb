class TrailSerializer < ActiveModel::Serializer
  attributes :id, :usertrails_id, :length, :difficulty
end
