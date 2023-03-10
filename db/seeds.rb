# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding data"

first_candy = Candy.create(name: "Jelly Filled Whales",image: "http://bit.ly/3WO1T3C",
category: "gummy")
second_candy = Candy.create(name: "Wilbur Buds", image: "http://bit.ly/3Ib24lC",
category: "chocolate")
third_candy = Candy.create(name: "Candy Apple", image: "http://bit.ly/3G5IYL7",
category: "hard-candy")
fourth_candy = Candy.create(name: "Swedish Fish", image: "http://bit.ly/3Q2EOrZ",
category: "gummy")
fifth_candy = Candy.create(name: "Jelly Beans", image: "http://bit.ly/3WwzZJN",
category: "chewy")
sixth_candy = Candy.create(name: "Rock Candy", image: "http://bit.ly/3YW7jvi",
category: "hard-candy")
seventh_candy = Candy.create(name: "Chocolate Covered Pretzels", image: "http://bit.ly/3Ib2OHq",
category: "chocolate")
eighth_candy = Candy.create(name: "Gummy Eggs", image: "http://bit.ly/3VtzNcR",
category: "gummy")
ninth_candy = Candy.create(name: "Candy Cane", image: "http://bit.ly/3VMIaAF",
category: "hard-candy")
tenth_candy = Candy.create(name: "Gummy Sharks", image: "http://bit.ly/3WOXSvV",
category: "gummy")
eleventh_candy = Candy.create(name: "Mints", image: "http://bit.ly/3vnuQHR",
category: "chewy")
twelveth_candy = Candy.create(name: "Salt Water Taffy", image: "http://bit.ly/3YYh7or",
category: "chewy")

first_user = Customer.create(username: "bobsmith", password: "123")
second_user = Customer.create(username: "patti", password: "123")
third_user = Customer.create(username: "johndoe", password: "123")

first_review = Review.create(candy: third_candy, customer: first_user, comment: "They were delicious")
second_review = Review.create(candy: fifth_candy, customer: second_user, comment: "A bit stale")
third_review = Review.create(candy: second_candy, customer: third_user, comment: "Better than Hershey's")
fourth_review = Review.create(candy: seventh_candy, customer: third_user, comment: "Yummy!")
fifth_review = Review.create(candy: fourth_candy, customer: second_user, comment: "Love them - my favorite")
sixth_review = Review.create(candy: tenth_candy, customer: first_user, comment: "Good and remind me of being a kid")


puts "Done seeding"