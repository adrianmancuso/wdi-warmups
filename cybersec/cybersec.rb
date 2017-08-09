require 'fileutils'
require 'pry'

stolen_data = []
output_data = {}

File.open("data.txt", "r+") do |file| 
  while line = file.gets
    stolen_data.push line
  end
end


row_names = stolen_data.shift.split ","

criminal_record = stolen_data.map do |record|  
  record.split ","
end

collated_data = criminal_record.map do |record|
  row_names.zip(record)
end

collated_data.each do |criminal|
  output_data
end

binding.pry
puts stolen_data