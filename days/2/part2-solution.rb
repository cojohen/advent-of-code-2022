################################################################################
#
#  Author:  Joe Cohen
#  Mood:    Frosty
#  Problem: https://adventofcode.com/2022/day/2#part2
#  Status:  Solved
#
################################################################################

running_total = 0
scores = { 'A' => 1, 'B' => 2, 'C' => 3 }
file = File.open(__dir__ + '/input.txt', 'r')
# file = File.open(__dir__ + '/test-input-1.txt', 'r')

def calc_match_score(a, b)  
  if (b == 'Y')  # draw
    a + 3
  elsif (b == 'Z')  # win
    a == 3 ? 7 : a + 7
  else  # loss
    a == 1 ? 3 : a - 1
  end
end

while !file.eof?
  line = file.readline
  plays = line.split(' ')
  player_1 = scores[plays[0]]
  player_2 = plays[1]
  running_total += calc_match_score(player_1, player_2)
end

puts running_total
