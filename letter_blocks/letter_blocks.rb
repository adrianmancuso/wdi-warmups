require "pry"

def can_make_word word

	blocks = [['B','O'],
	['X','K'],
	['D','Q'],
	['C','P'],
	['N','A'],
	['G','T'],
	['R','E'],
	['T','G'],
	['Q','D'],
	['F','S'],
	['J','W'],
	['H','U'],
	['V','I'],
	['A','N'],
	['E','R'],
	['F','S'],
	['L','Y'],
	['P','C'],
	['Z','M'],]

	matching_blocks = 0
	
	word.each_char do |l|
		blocks.each_with_index do |block, index|
			if block.include?(l)
				matching_blocks += 1
				blocks.delete_at(index)
				break
			end
		end
	end

	if word.length == matching_blocks
		true
	else
		false
	end

end

binding.pry