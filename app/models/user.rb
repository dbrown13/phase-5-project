class User < ApplicationRecord
    has_many :usertrails, class_name: "UserTrail"
    has_many :trails, through: :usertrails

    has_secure_password
    validates :username, presence: true
    validates :password, length: {minimum: 4}, on: :create
end
