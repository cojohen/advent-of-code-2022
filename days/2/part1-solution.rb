################################################################################
#
#  Author:  Joe Cohen
#  Mood:    Frosty
#  Problem: https://adventofcode.com/2022/day/2
#  Status:  Solved
#
################################################################################
running_total = 0
file = File.open(__dir__ + '/input.txt', 'r')
# file = File.open(__dir__ + '/test-input-1.txt', 'r')
scores = { 'X' => 1, 'Y' => 2, 'Z' => 3 }

def calc_match_score(a, b)
  if (a == 'A' && b == 1) || (a == 'B' && b == 2) || (a == 'C' && b == 3)
    b + 3  #draw
  elsif (a == 'A' && b == 2) || (a == 'B' && b == 3) || (a == 'C' && b == 1)
    b + 6  #win
  else
    b  #loss
  end
end

while !file.eof?
  line = file.readline
  plays = line.split(' ')
  player_1 = plays[0]
  player_2 = scores[plays[1]]
  running_total += calc_match_score(player_1, player_2)
end

puts running_total
