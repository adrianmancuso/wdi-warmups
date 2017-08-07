require "pry"

def get_squares(array)
	result = []
	array.each do |num|
		if Math.sqrt(num) % 1 == 0
			result.push num
		end
	end
	result.sort.uniq
end

binding.pry