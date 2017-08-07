require "pry"

def word_balancer word

	alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	letter_values = []


	letters = word.upcase.split("")
	letters.each { |letter| letter_values.push( alphabet.index(letter)+1 ) }

	if letters.length > 2
		# go to 2nd letter and find value and relative values
		letter_values.each_index do |index|
			if index > 0
				side_one = []
				side_two = []

				side_one.push(letter_values[0..index-1])
				side_two.push(letter_values[index+1..letter_values.length])
				side_one.flatten!.reverse
				side_two.flatten!

				balance_one = 0
				balance_two = 0

				side_one.each_with_index do |value,index|
					balance_one += ((index+1)*value)
				end

				side_two.each_with_index do |value,index|
					balance_two += ((index+1)*value)
				end

				if balance_one == balance_two
					return 'word is balanced'
				end

			 end 
		end

		else
			puts "#{word} cannot be balanced :("
	end
end

binding.pry

console.log('hello')
