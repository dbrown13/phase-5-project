class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :length, :difficulty, :favorites

  belongs_to :location
end
