class CreateUserTrails < ActiveRecord::Migration[7.0]
  def change
    create_table :user_trails do |t|
      t.integer :user_id
      t.integer :trail_id
      t.boolean :completion

      t.timestamps
    end
  end
end
