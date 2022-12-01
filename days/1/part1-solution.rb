################################################################################
#
#  Author:  Joe Cohen
#  Mood:    Jolly
#  Problem: https://adventofcode.com/2022/day/1
#  Status:  Solved
#
################################################################################

group_total = largest_total = 0
file = File.open(__dir__ + '/input.txt', 'r')
# file = File.open(__dir__ + '/test-input-1.txt', 'r')

while !file.eof?
  line = file.readline

  if line.strip.empty?
    group_total = 0
  else
    group_total += line.to_i
  end

  largest_total = group_total > largest_total ? group_total : largest_total
end

puts largest_total
