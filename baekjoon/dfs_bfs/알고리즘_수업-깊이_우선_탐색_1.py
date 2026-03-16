import sys
sys.setrecursionlimit(10**6)

sys.stdin = open("baekjoon/dfs_bfs/input.txt", "r")
input_data = sys.stdin.read().splitlines()

# 정점의 개수: N
# 간선의 개수: M
# 시작 정점 : R
N, M, R = map(int, input_data[0].split())

# 그래프 그리기
graph = []
for _ in range(N + 1):
    graph.append([])

for line in input_data[1:]:
    a, b = map(int, line.split())
    graph[a].append(b)
    graph[b].append(a)

# 정점 번호 오름차순 정렬
for list in graph:
    list.sort()

# 방문 유무 확인
visited = [0] * (N + 1)
count = 1

# dfs
def dfs(n_node):
    global count
    visited[n_node] = count # 현재 노드에 몇 번째로 방문했는지 기록

    for next_node in graph[n_node]:
        if visited[next_node] == 0:
            count += 1
            dfs(next_node)

# 실행
dfs(R)

# 출력
for i in range(1, N + 1):
    print(visited[i])