require "pry"

class Dice

	@@rolls = []

	def self.roll(num=1)
		num.times {@@rolls.push(rand(1..6))}
		return Dice
		# def self.sum(array)
		# 	arr2 = []
		# 	arr2.push.array
		# 	result = array.reduce(:+)
		# 	arr2.push(result)
		# 	p arr2
		# end
	end

	def self.sum
		@@rolls.sum
	end


	# def self.roll
	# 	return Proc.new {rand(1..6)}
	# end

	# def mult(num)
	# 	return roll.call * 2
	# end

end


binding.pry