class Video < ActiveRecord::Base
  validates :category, presence: true
end
