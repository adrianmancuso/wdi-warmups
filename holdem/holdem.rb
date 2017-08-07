require 'pry'

class Game

	@@pack_of_cards = [['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'], ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'], ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'], ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']]

	def initialize
		@player_one = Player.new
		@player_two = Player.new
		@player_three = Player.new
	end

	def view_deck
		@@pack_of_cards
	end

	def player_one
		@player_one
	end

end

class Player < Game

	
	def initialize
		@hand = []
		starting_hand
	end

	def draw_card
		card = @@pack_of_cards[rand 4].shuffle.pop
		@hand.push card
	end

	def starting_hand
		draw_card
		draw_card
	end

	def see_hand
		@hand
	end

end

new_game = Game.new
# bob = Player.new
# angie = Player.new
# harold = Player.new
# dt = Player.new
# kasun = Player.new
# adrian = Player.new

binding.pry

puts 'hello'