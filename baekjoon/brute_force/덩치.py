import sys

# 키: x
# 몸무게: y
# 덩치: (x, y)

# 덩치 등수: 나보다 덩치가 큰 사람의 수 + 1

sys.stdin = open("baekjoon/brute_force/input.txt", "r")
input_data = sys.stdin.read().splitlines();
humans = input_data[1:]

results = []

# 덩치가 크다 -> 키도 크고 몸무게도 크다
for human in humans:
    rank = 1 # 현재 비교할 사람의 등수

    # 다른 사람과 현재 비교할 사람의 덩치(키, 몸무게)를 비교
    # 현재 사람의 덩치 등수를 결과 리스트에 추가
    height, weight = map(int, human.split())

    for human2 in humans:
        height2, weight2 = map(int, human2.split())

        if height < height2 and weight < weight2:
            rank += 1

    results.append(rank)

print(" ".join(map(str, results)))