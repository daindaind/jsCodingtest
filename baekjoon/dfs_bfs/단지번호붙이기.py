# 1: 집이 있는 곳
# 0: 집이 없는 곳

# 집이 연결 됨 -> 상하좌우로 맞닿음

# 첫번째 줄: 지도의 크기 N  ex. N * N
import sys
sys.setrecursionlimit(10**6)

sys.stdin = open("baekjoon/dfs_bfs/input.txt", "r")
input_data = sys.stdin.read().splitlines()

N = int(input_data[0]) # 지도의 크기

# 그래프 그리기
graph = []
for line in input_data[1:]:
    list = []
    for i in line:
        list.append(int(i))
    graph.append(list)

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# 방문 체크 리스트
visited = [[False] * N for _ in range(N)]

# 각 단지의 집 개수를 담을 리스트
ans_list = []

# 집 개수
count = 0

# 탐색할 집 주변을 수색한다.
def dfs(x, y):
    global count
    visited[x][y] = True
    count += 1

    for i in range(4):
        now_x = x + dx[i]
        now_y = y + dy[i]

        # 지도 범위 안에 있는지 체크
        if 0 <= now_x < N and 0 <= now_y < N:
            # 갈 수 있는 곳이고, 방문을 안 했었다면
            if graph[now_x][now_y] == 1 and not visited[now_x][now_y]:
                dfs(now_x, now_y)

# 지도 한칸씩 다 돌며 방문했었는지 확인한다.
for i in range(N):
    for j in range(N):
        if graph[i][j] == 1 and not visited[i][j]:
            count = 0
            dfs(i, j)
            ans_list.append(count)

# 출력
# 첫번째 줄: 총 단지 수
# 두번째 줄: 각 단지 내 집 수(오름차순)
ans_list.sort()
print(len(ans_list))
for num in ans_list:
    print(num)