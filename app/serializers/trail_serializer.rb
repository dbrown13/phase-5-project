class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :length, :difficulty

  belongs_to :location
end
