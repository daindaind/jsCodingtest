import sys
from collections import deque

sys.stdin = open("baekjoon/dfs_bfs/input.txt", "r")
input_data = sys.stdin.read().splitlines()

N, M, R = map(int, input_data[0].split())

# 그래프 그리기
graph = []
for _ in range(N + 1):
    graph.append([])

for nodes in input_data[1:]:
    a, b = map(int, nodes.split())
    graph[a].append(b)
    graph[b].append(a)

# 그래프 오름차순 정렬
for nodes in graph:
    nodes.sort()

# 방문 여부 리스트
visited = [0] * (N + 1)

# 방문 순서 카운트
count = 1

# bfs
def bfs(start):
    global count
    queue = deque([start])
    visited[start] = count

    while queue:
        n_node = queue.popleft()

        for next_node in graph[n_node]:
            if visited[next_node] == 0:
                count += 1
                visited[next_node] = count
                queue.append(next_node)

# 호출
bfs(R)

# 출력
for i in range(1, N + 1):
    print(visited[i])