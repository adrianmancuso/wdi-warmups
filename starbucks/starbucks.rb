require "pry"
require_relative "coffee.rb"

current_orders = {}
completed_orders = {}

instore = true

while instore

	puts "Welcome to Starbucks, what type of coffee would you like?"
	@type = gets.chomp
	puts "OK, and how many sugars?"
	@sugars = gets.chomp.to_i
	puts "...and what size?"
	@size = gets.chomp
	puts "You got it, what name is that for?"
	@name = gets.chomp

	current_orders.store @name.to_sym, Coffee.new(@type, @sugars, @size, @name)

puts current_orders.each {|order| order.to_s}
	binding.pry
}
end
