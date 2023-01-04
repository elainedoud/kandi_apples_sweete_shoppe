class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :candy_id, :user_id, :comment
end
