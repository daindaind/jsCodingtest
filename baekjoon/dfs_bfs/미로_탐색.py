import sys
from collections import deque

sys.stdin = open("baekjoon/dfs_bfs/input.txt", "r")
input_data = sys.stdin.read().splitlines()

# 1 : 이동할 수 있는 칸
# 0 : 이동할 수 없는 칸

# N M : 도착해야 하는 칸의 좌표
N, M = map(int, input_data[0].split())

# 미로를 그래프로 만들기
graph = []
for i in range(1, N + 1):
    graph.append(list(map(int, input_data[i])))

# bfs 필수 조건
# 1. 큐를 사용한다.
# 2. 방문한 곳을 체크한다.

# 상, 하, 좌, 우를 의미하는 좌표 변화량
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# bfs로 지나야 하는 최소 칸의 수 구하기
def bfs(x, y):
    queue = deque([(x, y)])

    while queue:
        now_x, now_y = queue.popleft()

        # 도착지점에 도달했으면 그 때의 숫자 반환
        if now_x == N - 1 and now_y == M - 1:
            return graph[now_x][now_y]
        
        # 시작 좌표의 상하좌우를 체크
        for i in range(4):
            nx = now_x + dx[i]
            ny = now_y + dy[i]

            # nx, ny가 미로 범위 안에 있는지 체크
            if 0 <= nx < N and 0 <= ny < M:
                # graph[nx][ny]가 이동가능한 1 칸인지 체크
                # 동시에 이전에 방문했던 곳인지 아닌지 체크
                if graph[nx][ny] == 1:
                    graph[nx][ny] = graph[now_x][now_y] + 1
                    queue.append((nx, ny))

    return "도착점에 도달할 수 없습니다!"

print(bfs(0, 0))