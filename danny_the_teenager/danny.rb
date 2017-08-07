puts "Uh, hey... What's up?"
user_input = gets.chomp
while user_input != "bye" 
	if user_input.start_with?("Bro, ")
		user_input.downcase!
		puts "#{user_input.gsub!(/[aeio]/, 'a' => 4, 'e' => 3, 'i' => 1, 'o' =>0)}"
	elsif user_input.end_with?("?") 
		puts "Sure..."
	elsif user_input == ""	
		puts "Fine, be that way..."
	elsif user_input == user_input.upcase
		puts "Whoa, chill out"	
	else
		puts "Whatever..."			
	end
	puts "Uh, hey... What's up?"
	user_input = gets.chomp
end

puts "Cool, go away, you're creeping me out."