import sys

croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

sys.stdin = open("baekjoon/simulation/input.txt", "r")
word = sys.stdin.readline().strip()

# 입력으로 주어진 단어
# 1. 크로아티아 알파벳인지 판단
# 2. 크로이탕 알파벳이 아닌 알파벳은 그대로 카운트

slice_count = 0

for token in croatia:
    word = word.replace(token, '_')

print(len(word))