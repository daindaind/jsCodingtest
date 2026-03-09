import sys
from collections import deque

sys.stdin = open("baekjoon/dfs_bfs/input.txt", "r")
input_data = sys.stdin.read().splitlines()

N = int(input_data[0].split()[0]) # N: 정점의 개수 (노드 개수)
M = int(input_data[0].split()[1]) # M: 간선의 개수 (연결된 노드 짝의 수)

# 1. 그래프 그리기
# ex. [[], [2, 5], [1, 5], [4], [3, 6], [2, 1], [4]]
graph = []
for _ in range(N + 1):
    graph.append([])

for line in input_data[1:]:
    a, b = map(int, line.split())
    graph[a].append(b)
    graph[b].append(a)

# 2. 방문 체크 리스트
# ex. [False, False, False, False, False, False, False]
visited = [False] * (N + 1)

# 노드가 연결된 덩어리 개수
ans_count = 0

# 3. BFS
def bfs(start):
    queue = deque([start])
    visited[start] = True

    while queue:
        now = queue.popleft()

        # 그래프 전체를 돌면서 1부터 연결된 노드들을 체크한다.
        for check_node in graph[now]:
            # 만약 방문한 적이 없다면 -> 방문 체크 후 카운트를 증가시킨다.
            if not visited[check_node]:
                visited[check_node] = True
                queue.append(check_node)

# 전체 노드에서 연결된 덩어리 찾기
for i in range(1, N + 1):
    if not visited[i]:
        bfs(i)
        ans_count += 1

print(ans_count)