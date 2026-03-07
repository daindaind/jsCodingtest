# 종료 조건: 방문할 수 있는 점이 없는 경우
# 정점이 여러개인 경우, 정점 번호가 작은 것을 먼저 방문

# 입력
# 첫째줄: 정점의 개수 N, 간선의 개수 M, 탐색을 시작할 정점의 번호 V
# 두번째 줄 ~: 간선이 연결하는 두 정점의 번호들

# 출력
# 첫째줄 DFS 를 수행 -> 방문된 점 순서대로
# 둘째줄 BFS 를 수행 -> 방문된 점 순서대로

import sys
from collections import deque
sys.setrecursionlimit(10*6)

sys.stdin = open("baekjoon/dfs_bfs/input.txt", "r")
input_data = sys.stdin.read().splitlines()

N, M, V = map(int, input_data[0].split())

# 그래프 그리기
graph = []
for _ in range(0, N + 1):
    graph.append([])

for line in input_data[1:]:
    a, b = map(int, line.split())
    graph[a].append(b)
    graph[b].append(a)

# 그래프 안 내용물 정렬
for i in range(0, len(graph)):
    graph[i].sort()

visited_dfs = [False] * (N + 1)
result_dfs = []

def dfs(now):
    # 재귀
    visited_dfs[now] = True
    result_dfs.append(now)

    for next_node in graph[now]:
        if not visited_dfs[next_node]:
            dfs(next_node)

visited_bfs = [False] * (N + 1)
result_bfs = []

def bfs(start):
    queue = deque([start])
    visited_bfs[start] = True
    result_bfs.append(start)

    while queue:
        now = queue.popleft()

        for now_node in graph[now]:
            # 현재 체크하려는 애가 방문 기록에 없으면
            if not visited_bfs[now_node]:
                visited_bfs[now_node] = True
                result_bfs.append(now_node)
                queue.append(now_node)

dfs(V)
bfs(V)

print(*(result_dfs))
print(*(result_bfs))