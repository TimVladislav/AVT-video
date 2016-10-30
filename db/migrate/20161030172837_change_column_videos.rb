class ChangeColumnVideos < ActiveRecord::Migration
  def change
    rename_column :videos, :type, :category
  end
end
