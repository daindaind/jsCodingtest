# 1. 모든 숫자 리스트를 구한다.
all_numbers = set(range(1, 10000))
generated_numbers = set()

# 2. 생성된 숫자 집합을 만든다.
def d(n):
    string_n = str(n)

    total = 0

    for i in string_n:
        total = total + int(i)

    result = n + total

    # 축약 버전
    # n = n + sum(int(i) for i in str(n))
    # return n
    return result

# 3. 차집합을 구한다. (셀프 넘버만 남음)
for i in range(1, 10001):
    generated_numbers.add(d(i))

self_numbers = all_numbers - generated_numbers

for num in sorted(self_numbers):
    print(num)