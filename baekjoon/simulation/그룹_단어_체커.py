import sys

# 백준 제출 시 아래 줄은 주석 처리 or 삭제
sys.stdin = open("baekjoon/simulation/input.txt", "r")

# 입력 1 : 단어의 개수 N -> 체크를 몇번 반복할지 결정
# 백준 서버는 여기서부터 읽음
N = int(sys.stdin.readline().strip())
words = []

# 1개 이상 뭉쳐져 있어야 함
# 단어 N개를 입력 받아, 그룹 단어의 개수를 출력
# 1개라도 떨어져 있으면 그룹 단어가 아님

count = 0

# 입력 2~ : N개의 단어   -> 체크의 대상
for i in range(N):
    word = sys.stdin.readline().strip()
    words.append(word)

# 그룹단어인지 확인하는 함수
def is_group_word(word):
    global count
    stack = []

    for i in word:
        if stack and stack[-1] == i:
            continue
        else:
            if i in stack:
                return # 그룹 단어가 아님
            stack.append(i)

    count += 1 # 그룹 단어임
    
# 입력받은 단어를 하나씩 체크
for word in words:
    is_group_word(word)

# 출력 : 그룹 단어의 개수
print(count)