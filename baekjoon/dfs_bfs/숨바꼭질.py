# 1. 문제 분석: 최단 거리 문제 -> BFS 활용
# 2. 상태 정의: 노드 = 현재 위치(X), 간선 = X-1, X+1, 2X (가중치 1초)
# 3. 데이터 구조: 
#    - Queue: 방문할 노드 관리
#    - visited: 방문 여부 및 소요 시간 저장 (0~100,000)
# 4. 예외 케이스: N과 K가 처음부터 같을 경우? 범위 밖으로 나가는 경우?

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