require "pry"

def check_numeral(num, roman_num, letter, string)
	
	remainder = num % roman_num

	if remainder < num
		(num/roman_num).times do
			string.concat letter
			num -= roman_num
		end
	end

	num

end


def romanticize number

	roman_numeral = ""

	number = check_numeral(number, 1000, 'M', roman_numeral)
	number = check_numeral(number, 500, 'D', roman_numeral)
	number = check_numeral(number, 100, 'C', roman_numeral)
	number = check_numeral(number, 50, 'L', roman_numeral)
	number = check_numeral(number, 10, 'X', roman_numeral)
	number = check_numeral(number, 5, 'V', roman_numeral)
	number = check_numeral(number, 1, 'I', roman_numeral)

	roman_numeral
end

binding.pry

"hello"