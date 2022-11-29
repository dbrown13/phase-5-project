class AddFavoritesToTrails < ActiveRecord::Migration[7.0]
  def change
    add_column :trails, :favorites, :boolean
  end
end
