class AddFavoritesToUserTrails < ActiveRecord::Migration[7.0]
  def change
    add_column :user_trails, :favorites, :boolean
  end
end
