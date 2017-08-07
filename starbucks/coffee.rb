require "pry"

class Coffee

	def initialize(type, sugars, size, name)
	@type = type
	@sugars = sugars.to_i
	@size = size
	@name = new_name(name)
	@order_taken = Time.now	
	@wait_time = wait_time
	@collected = false
	end

	def to_s
		"#{@name}'s #{@type}, #{@size}, #{@sugars} sugars"
	end

	def new_name(name)
		@new_name = name.sub ('a'..'z').to_a.sample, ('a'..'z').to_a.sample
	end

	def wait_time
		@order_taken + (rand(120..300)) 
	end

	def ready?
		if Time.now >= @wait_time
			puts self.to_s
			@collected = true
		else
			puts 'Not ready yet'
		end
	end


end

