import sys
from collections import deque

sys.stdin = open("baekjoon/dfs_bfs/input.txt", "r")

# 가로, 세로 -> 행렬문제!!
# 상하좌우 + 대각선 연결되었다고 봄
# 한 입력에 테스트케이스가 여러개임 (iter)
# 입력의 마지막 0 0

# w: 너비
# h: 높이

dr = [-1, 1, 0, 0, -1, -1, 1, 1] # 대각선 4방향 추가  (-1, -1, 1, 1)
dc = [0, 0, -1, 1, -1, 1, -1, 1] # 대각선 4방향 추가 (-1, 1, -1, 1)

# 1. 입력부
# 읽을 때: next(input_iter)
input_iter = iter(sys.stdin.read().split())

# 2. BFS
def bfs(r, c, max_r, max_c, graph, visited):
    queue = deque([(r, c)])
    visited[r][c] = True
    
    while queue:
        now_node = queue.popleft()

        # TODO: 대각선 체크 로직 추가
        for i in range(8):
            nr = now_node[0] + dr[i]
            nc = now_node[1] + dc[i]

            # 범위 체크
            if 0 <= nr < max_r and 0 <= nc < max_c:
                # 방문 했는지, 1인지
                if not visited[nr][nc] and graph[nr][nc] == 1:
                    visited[nr][nc] = True
                    queue.append((nr, nc))


# 3. 테스트케이스 반복부
while True:
    col = int(next(input_iter)) # 가로
    row = int(next(input_iter)) # 세로

    # "0 0" 이 나오면 종료
    if col == 0 and row == 0:
        break

    # 카운트 초기화
    ans_count = 0

    # ⭐️⭐️⭐️ 그래프 초기화
    graph = []
    for r in range(row):
        line = [int(next(input_iter)) for _ in range(col)]
        graph.append(line)
    # 방문 체크 리스트 초기화
    visited = [[False] * col for _ in range(row)]

    # 노드 반복부
    for r in range(row):
        for c in range(col):

            # 1인지, 방문 했는지 확인
            if not visited[r][c] and graph[r][c] == 1:
                bfs(r, c, row, col, graph, visited)
                ans_count += 1

    print(ans_count)