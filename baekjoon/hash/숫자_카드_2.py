import sys

sys.stdin = open("baekjoon/hash/input.txt", "r")
input_data = sys.stdin.read().splitlines()

n_list = input_data[1] # 상근이의 숫자카드
m_list = input_data[3] # 주어진 정수

hash_map = {}

# 상근이가 가진 숫자카드에 대한 해시 맵을 만든다
for i in n_list.split():
    if i in hash_map:
        hash_map[i] += 1
    else:
        hash_map[i] = 1

# 주어진 정수에 대해서 숫자카드와 비교하여 결과 담기
results = []
for i in m_list.split():
    if i in hash_map:
        results.append(str(hash_map[i]))
    else:
        results.append("0")

print(" ".join(results))