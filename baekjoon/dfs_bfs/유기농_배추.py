# 지렁이가 연결된 배추들을 찾아다닐 수 있음
# 지렁이가 다니려면 배추들이 다 연결되어 있어야 함
# 연결된 배추 무리가 몇개인지 찾는게 관건

import sys
sys.setrecursionlimit(10**6)

sys.stdin = open("baekjoon/dfs_bfs/input.txt", "r")

# 입력 데이터를 순서대로 뽑아쓰는 반복자
input_inter = iter(sys.stdin.read().split())

# dr: row의 변화량, dc: column의 변화량
dr = [-1, 1, 0, 0]
dc = [0, 0, -1, 1]

# 테스트 1개에 대한 지렁이 찾기
# 배추 탐색기 (dfs)
def dfs(r, c, max_r, max_c, graph, visited):
    visited[r][c] = True

    for i in range(4):
        nr = r + dr[i]
        nc = c + dc[i]

        if 0 <= nr < max_r and 0 <= nc < max_c:
            if not visited[nr][nc] and graph[nr][nc] == 1:
                dfs(nr, nc, max_r, max_c, graph, visited)

def resolve():
    T_str = next(input_inter, None)
    if not T_str: return

    # 테스트 케이스 개수대로 반복 (T)
    # 테스트 1개에 대한 지렁이 찾기를 T만큼 반복
    for _ in range(int(T_str)):
        M = int(next(input_inter)) # M: 배추밭 가로 길이 (column)
        N = int(next(input_inter)) # N: 배추밭 세로 길이 (row)
        K = int(next(input_inter)) # K: 배추가 심어져 있는 위치의 개수

        # 그래프[세로][가로]
        # 그래프, 방문 체크 리스트 초기화
        graph = [[0] * M for _ in range(N)]
        visited = [[False] * M for _ in range(N)] 

        # 배추 위치 표시
        for _ in range(K):
            col = int(next(input_inter)) # 가로 값
            row = int(next(input_inter)) # 세로 값
            graph[row][col] = 1

        # 연결 무리 카운트
        count = 0
        for r in range(N):
            for c in range(M):
                if not visited[r][c] and graph[r][c] == 1:
                    dfs(r, c, N, M, graph, visited)
                    count += 1
        # 출력
        # 각 테스트 케이스에 대한 지렁이 마리 수
        print(count)


resolve()