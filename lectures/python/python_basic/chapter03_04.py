# Chpater03-4
# 파이썬 튜플
# 리스트와 비교중요 # list와의 차이는 2가지
# 튜플 자료형(순서o, 중복o, 수정x, 삭제x)
# -> 한번 데이터가 들어오면 순서와 중복만 유지한 채,
# 나머지는 불변이다.(이것을 리뮤 테이블이라고 한다.)
# 예를 들면 중요한 정보, 기준값 등에 튜플을 사용한다.

# 선언

a = ()
b = (1,)
b2 = (1)
c = (11, 12, 13, 14)
d = (100, 1000, 'Ace', 'Base', 'Captine')
e = (100, 1000, ('Ace', 'Base', 'Captine'))

print(type(a), type(b), type(b2)) #원소가 하나일 때는 콤마(,)를 찍어야한다 그렇지 않으면 int가 된다.

# 인덱싱
print('>>>>>')
print('d - ', d[1])
print('d - ', d[0] + d[1] + d[1])
print('d - ', d[-1])
print('d - ', e[-1])
print('d - ', e[-1][1])
print('d - ', list(e[-1][1])) # 튜플의 특징이 사라지고 수정, 삭제가 가능해진다.

# 수정x
# d[0] = 1500 -> error 수정이 안됨

# 슬라이싱
print('>>>>>')
print('d - ', d[0:3])
print('d - ', d[2:])
print('d - ', e[2][1:3])

# 튜플 연산
# 수정이나 삭제가 불가능하므로 연산을 통한 원소의 갯수가 늘어나는 것을 허용하는 것.
print('>>>>>')
print('c + d', c + d)
print('c * 3', c * 3)
print(c)
#c = c * 3
#print(c)

# 튜플 함수
print('튜플 함수')
a = (5, 2, 3, 1, 4)
print('a - ', a)
print('a - ', a.index(3)) # 3이 있는 index를 반환
print('a - ', a.count(2)) # 2가 몇개 있는지 반환

# 팩킹 & 언팩킹(Packing, and Unpacking)

# 팩킹 (여러가지를 하나로 묶는 것)
t = ('foo', 'bar', 'baz', 'qux') # 4개의 원소를 하나로 묶은것(팩킹)

print(t)
print(t[0])
print(t[-1])

# 언팩킹1
(x1, x2, x3, x4) = t

print(type(x1), type(x2), type(x3), type(x4))
print(x1, x2, x3, x4)

# 팩킹 & 언팩킹
t2 = 1, 2, 3 # 팩킹 (참고)가로가 없어도 튜플이다.
t3 = 4, # 팩킹
x1, x2, x3 = t2 # 언팩킹
x4, x5, x6 = 4, 5, 6 # 언팩킹

print(t2)
print(t3)
print(x5)
print(x1, x2, x3)
print(x4, x5, x6)