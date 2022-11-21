class CreateTrails < ActiveRecord::Migration[7.0]
  def change
    create_table :trails do |t|
      t.integer :usertrails_id
      t.string :length
      t.string :difficulty

      t.timestamps
    end
  end
end
