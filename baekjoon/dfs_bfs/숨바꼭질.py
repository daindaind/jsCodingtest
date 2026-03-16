# 수빈이: 점 N
# 동생: 점 K
# 가장 빠른 시간 -> BFS

# 걷거나 순간이동? 
# 걷기 -> x-1 or x+1 이동
# 순간이동 -> 2*x

# 1초 -> 정점과 정점 사이 이동 시간
# 1번 이동 -> 1초
# 이동의 방법이 두개 (걷기, 순간이동)

# 초 -> count
# 몇번 이동했을 때 가장 빠르게 동생 지점에 도달할 수 있는가?

# 가장 빠르게 이동할 수 있는 경로의 조합을 찾아야 하는것인가?

# 그래프를 어떻게 그리지?

# 그냥 계산
# 1. x-1   2. x+1   3. 2*x

import sys
from collections import deque

sys.stdin = open("baekjoon/dfs_bfs/input.txt", "r")
input_data = sys.stdin.read().split()

N, K = map(int, input_data)

# 방문여부 + 해당 좌표까지의 이동에 걸린 시간 기록
time = [-1] * 100_001

def bfs(start):
    queue = deque([start])
    time[start] = time[start] + 1

    # 수빈이와 동생이 처음부터 같은 곳에 있었을 경우
    if start == K:
        return 0

    while queue:
        now_node = queue.popleft()

        # 계산 결과가 동생 위치면 탐색을 종료
        if now_node == K:
            return time[now_node]

        next_node1 = now_node + 1
        next_node2 = now_node - 1
        next_node3 = 2 * now_node

        check_list = [next_node1, next_node2, next_node3]

        for check_node in check_list:
            # 계산 결과가 범위 내에 있고, 아직 방문하지 않았다면
            if 0 <= check_node <= 100_000 and time[check_node] == -1:
                time[check_node] = time[now_node] + 1
                queue.append(check_node)

print(bfs(N))