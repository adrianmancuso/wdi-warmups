require "pry"


class Scrabble

	@letter_values = {
		1 => ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
		2 => ['D', 'G'],
		3 => ['B', 'C', 'M', 'P'],
		4 => ['F', 'H', 'V', 'W', 'Y'],
		5 => ['K'],
		8 => ['J', 'X'],
		10 => ['Q', 'Z']
	}

	def self.score(word, word_mult = :single_word)
		score = 0
		word = word.upcase!.split("")
		word.each do |letter|
			@letter_values.each {|points, letters| score += points if letters.include? letter}
		end
		if word_mult == :double_word
			return score *= 2
		elsif word_mult == :triple_word
			return score *= 3
		else
			return score
		end
	end

end

Scrabble.score('ape')
Scrabble.score('ape', :triple_word)
binding.pry