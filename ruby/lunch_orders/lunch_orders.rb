require "pry"

all_orders = {}
name = :blank

def get_name name
	puts "Name for the order:"
	name = gets.chomp.to_sym.
	all_orders.store name, []
end

def get_item person_name, hash_name
	puts "What would you like to order, #{person_name}?"
	binding.pry
	item = gets.chomp
	hash_name[person_name].push item
end


main_continue = "y"


while main_continue == "y"

	get_name name
	binding.pry
	order_continue = "y"
	while order_continue == "y"
		binding.pry
		get_item name, all_orders
		puts "Would you like to add anything to your order? (Y/N)"
		order_continue = gets.chomp.downcase
	end

	puts "Any more orders to process?"
	main_continue = gets.chomp.downcase
end

binding.pry

