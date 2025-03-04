# Chapter04-2
# 파이썬 반복문(For)
# For 실습

# 코딩의 핵심
# for in <collection>
#   <Loop body>

for v1 in range(10):
    print('v1 is :', v1)
print()

for v2 in range(1, 11): # 1~10
    print('v2 is : ', v2)
print()

for v3 in range(1, 11, 2):
    print('v3 is : ', v3)

# 1 ~ 1000 합
sum1 = 0
for v in range(1, 1001):
    sum1 += v

print('1 ~ 1000 Sum : ', sum1)
print('1 ~ 1000 Sum Method :', sum(range(1, 1001))) #내부적으로 리스트를 받는다?
print(type(range(1,11)))
# Generator, Iterator라는 것에서 리스트를 생성해주고 연속적인 데이터를 담고있는 리스트를 생성헤주기 때문에 sum에서 range를 넣어주어도 내부적으로 sum에서 하나하나 꺼내와서
# for문 코드 처럼 계산해준다.

print('1 ~ 1000까지의 4의 배수의 합 구하시오 : ', sum(range(4, 1001, 4)))

sum2 = 0
for vv in range(4, 1001, 4):
    sum2 += vv
print("첫번째 방법:", sum2)

sum2 = 0
for vv in range(1, 1001):
    if vv % 4 == 0:
        sum2 += vv
print("두번재 방법:", sum2)

# Iterables 자료형 반복( 어떤 반복할 수 있는 객체)
# 문자열, 리스트, 튜플, 집합, 사전(딕셔너리) 이런 것들은 전부 for문에 사용할 수 있다.
# iterable 리턴 함수 : range(), reversed(), enumerate(), fileter(), map(), zip() => 모두 for문에 사용할 수 있다.

# 예제1
names = ['Kim', 'Park', 'Cho', 'Lee', 'Choi', 'Yoo']

for n in names:
    print('You are : ', n)

# 예제2
lotto_number = [11, 19, 21, 28, 36, 37]
for n in lotto_number:
    print("Currnet number : ", n)

# 예제3
word = "Beautiful"
for s in word:
    print('word', s)


# 예제4
my_info = {
    "name":'Lee',
    "Age":33,
    "City":"Seoul"

}
print()

for key in my_info:
    print("key :", key)
    print("values :", my_info.get(key))
print()

for v in my_info.values():
    print('values :', v)
print()

# 예제5
name = 'FineAppLE'

for n in name:
    if n.isupper():
        print(n)
    else:
        print(n.upper())

print()
print("대문자만 출력: ", name,  name.upper())
print()

# break
# ex) 1000명중 100점인 학생만 찾기(순차 검색)
numbers = [14, 3, 4, 7, 10, 24, 17, 2, 15, 34, 36, 38]

for num in numbers:
    if num == 34:
        print('Found : 34!')
        break
    else:
        print('Not found : ', num)

print()

# continue
# 어떤 조건 안에서 continue를 만나면 다시 조건을 검사하는 부분으로 이동!
lt = ["1", 2, 5, True, 4.3, complex(4)]
# 숫자나 숫자 모양의 string만 출력
for v in lt:
    if type(v) is bool: #자료형을 대조할 때는 is를 사용한다.
        continue #해당 조건에 부합하면 아랫 구문은 실행되지않고 다시 최상위 코드로 돌아간다. 일종의 스킵
    print("current type:", v, type(v))
    print('multiply by 2', v * 3)

print(False * 3)
print(True * 3)
print()

# for - else
print('# for - else')
numbers = [14, 3, 4, 7, 10, 24, 17, 2, 33, 15, 34, 36, 38]
for num in numbers:
    if num == 24:
        print("Found : 24")
        break # break가 작동하면 else문은 작동하지 않는다.
else:
    print('Not Found : 24')
print()

# 구구단 출력
for i in range(2, 10):
    print("{}:".format(i), end='')
    for j in range(1, 10):
        print("{:4d}".format(i * j), end='')
    print()
# 공간 복잡도 계산 복잡도는 시간 복잡도와 계산 복잡도가 있다 어쩌구..
# 총 81번이 실행 된다.

# 구구단 출력(그냥 내가 만든 것)
for i in range(2, 10):
    for j in range(1, 10):
        print(i, "*", j, "=", i*j)
    print()

# 변환 예제
name2 = 'Aceman'

print('Reversed', reversed(name2))
print('List로 형변환', list(reversed(name2)))
print('tuple로 형변환', tuple(reversed(name2)))
print('set으로 형변환', set(reversed(name2))) 
#순서가 없어서 매번 랜덤으로 출력 (집합은 어떤 원소들이 뭉쳐있는 것을 중시하지 순서를 중시하지는 않음)
# 이렇게 빠르게 형변환이 가능, 파이썬의 장점