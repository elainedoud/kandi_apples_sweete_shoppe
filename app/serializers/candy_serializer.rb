class CandySerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :category

  has_many :reviews

end
