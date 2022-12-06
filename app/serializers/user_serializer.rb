class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :bio

  has_many :usertrails, class_name: "UserTrail"
end
