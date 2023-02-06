class Candy < ApplicationRecord

has_many :reviews 
has_many :customers, through: :reviews 

end
