class CreateCandies < ActiveRecord::Migration[6.1]
  def change
    create_table :candies do |t|
      t.string :name
      t.string :image
      t.string :category

      t.timestamps
    end
  end
end
