class CreateUserTrails < ActiveRecord::Migration[7.0]
  def change
    create_table :user_trails do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :trail, null: true, foreign_key: true
      t.boolean :completion

      t.timestamps
    end
  end
end
