require 'pry'

class Robot
  
  def initialize
    self.name_generator
    @mac_address = "00:C5:03:#{Array.new(6){rand(16).to_s(16)}.join.upcase.scan(/.{2}|.+/).join(":")}"
    @instructions = 0
    puts "...ZZZzzZZZZTT! Hello, I am #{@name}, I am a MancusoCorp 
    product, MAC address #{@mac_address}. To avoid 
    fakes please confirm this corresponds to the MAC 
    address printed on my box."
  end

  def name
    if @name == ""
      self.name_generator
    end
    return @name
    @instructions+=1    
  end

  def mac
    return @mac_address
    @instructions+=1    
  end

  def factory_reset
    puts "Resetting to factory settings..."
    puts ".."
    puts "."    
    @name = ""
    @instructions+=1    
  end

  def name_generator
    @name = "#{('AA'..'ZZ').to_a.sample}#{rand(999)}" # sample pulls one from an array (could use "AA00".."ZZ999")
  end

  def instruction_count
    return @instructions
  end

end

binding.pry