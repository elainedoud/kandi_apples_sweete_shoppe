class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :candy_id, :customer_id, :comment

  belongs_to :customer
  belongs_to :candy
  
end
