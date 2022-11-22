class CreateTrails < ActiveRecord::Migration[7.0]
  def change
    create_table :trails do |t|
      t.string :length
      t.string :difficulty
      t.string :name

      t.timestamps
    end
  end
end
