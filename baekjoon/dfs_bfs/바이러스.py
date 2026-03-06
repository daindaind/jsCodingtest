import sys
from collections import deque

sys.stdin = open("baekjoon/dfs_bfs/input.txt", "r")
input_data = sys.stdin.read().splitlines()

# 첫번째는 컴퓨터 수(N)
N = int(input_data[0])

# 두번째는 연결된 컴퓨터 쌍의 수(V)
V = int(input_data[1])

# 세번째는 각각 연결된 컴퓨터 모아놓은 집합
graph = [[] for _ in range(N + 1)] # [[], [], [], ...]

# 입력값 중 컴퓨터 쌍 인덱스 범위만 가져오도록
for line in input_data[2:]:
    a, b = map(int, line.split())
    graph[a].append(b) # graph[a] -> 컴퓨터 a와 연결된 컴퓨터 목록
    graph[b].append(a) # graph[b] -> 컴퓨터 b와 연결된 컴퓨터 목록

# 방문 체크 리스트
# 0번째 인덱스는 사용 안함
visited = [False] * (N + 1)

def bfs(start):
    queue = deque([start])
    visited[start] = True
    count = 0

    while queue:
        now = queue.popleft()

        for next_com in graph[now]:
            if not visited[next_com]:
                visited[next_com] = True
                queue.append(next_com)
                count += 1
    return count


# 바이러스 걸린 컴퓨터 : 1번부터 체크
print(bfs(1))