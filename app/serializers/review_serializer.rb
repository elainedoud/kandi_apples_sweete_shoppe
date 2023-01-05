class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :candy_id, :user_id, :comment

  belongs_to :user
  belongs_to :candy
  
end
