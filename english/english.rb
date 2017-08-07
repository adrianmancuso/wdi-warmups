require "pry"

class Say
	
		
	def initialize(int)
		raise ArgumentError, 'Number must be between 0 and 99, inclusive' unless (int >=0 && int <=99)
		wordify(int)
	end
	
	def wordify(int)
	@final_number = []

		if int >= 20
			split_nums = int.to_s.split('')
			case split_nums[0].to_i
			when 2
				@final_number.push "twenty"
			when 3
				@final_number.push "thirty"
			when 4
				@final_number.push "forty"
			when 5
				@final_number.push "fifty"
			when 6
				@final_number.push "sixty"
			when 7
				@final_number.push "seventy"
			when 8
				@final_number.push "eighty"
			when 9
				@final_number.push "ninety"
			end
			int = split_nums[1].to_i
		end
				
		if int < 19
			case int
			when 0
				@final_number.push "zero"
			when 1
				@final_number.push "one"
			when 2
				@final_number.push "two"
			when 3
				@final_number.push "three"
			when 4
				@final_number.push "four"
			when 5
				@final_number.push "five"
			when 6
				@final_number.push "six"
			when 7
				@final_number.push "seven"
			when 8
				@final_number.push "eight"
			when 9
				@final_number.push "nine"
			when 10
				@final_number.push "ten"
			when 11
				@final_number.push "eleven"
			when 12
				@final_number.push "twelve"
			when 13
				@final_number.push "thirteen"
			when 14
				@final_number.push "fourteen"
			when 15
				@final_number.push "fifteen"
			when 16
				@final_number.push "sixteen"
			when 17
				@final_number.push "seventeen"
			when 18
				@final_number.push "eighteen"
			when 19
				@final_number.push "nineteen"
			end
		@result = @final_number.join("-")
		end
	end
	@result
end

# class Integer
	# raise ArgumentError, 'Number must be between 0 and 99, inclusive' unless (self >= 0 && self <= 99)
	
	# def initialize
	# end
# end

binding.pry