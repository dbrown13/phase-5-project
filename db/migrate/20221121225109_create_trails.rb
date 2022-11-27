class CreateTrails < ActiveRecord::Migration[7.0]
  def change
    create_table :trails do |t|
      t.string :length
      t.string :difficulty
      t.string :name
      t.belongs_to :location, null: true, foreign_key: true

      t.timestamps
    end
  end
end
