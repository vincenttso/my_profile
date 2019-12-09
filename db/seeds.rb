# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Clearing Projects...'
Project.destroy_all

puts 'Seeding projects...'

projects = [
             {
              title: 'The Mocktails',
              description: 'A simple web application to display your very own cocktail recipes!
              Created during my time in Le Wagon Melbourne - Batch #315',
              url: 'https://the-mocktails.herokuapp.com/',
              image: 'the-mocktail.png'
             },
             {
              title: 'Weekend PA',
              description: 'A web application designed for mobile to act as a self-routing task manager (Yay effeciency!).
              Created during my time in Le Wagon Melbourne - Batch #315',
              url: 'https://weekend-pa.herokuapp.com/',
              image: 'weekend-pa.png'
             }
           ]

projects.each do |project|
  Project.create(project)
end

puts 'Successfully seeded projects.'
