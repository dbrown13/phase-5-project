class User < ApplicationRecord
    has_many :usertrails
    has_many :trails, through: :usertrails
end
