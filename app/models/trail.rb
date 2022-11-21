class Trail < ApplicationRecord
    belongs_to :location
    has_many :usertrails
    has_many :users, through: :usertrails
end
