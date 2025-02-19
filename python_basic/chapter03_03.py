# Chpater03-3
# 파이썬 리스트
# 자료구조에서 중요
# 리스트 자료형(순서o, 중복o, 수정o, 삭제o)

# 선언
a = []
b = list()
c = [70, 75, 80, 85] #len
d = [1000, 10000, 'Ace', 'Base', 'Captine']
e = [1000, 10000, ['Ace', 'Base', 'Captine']]
f = [21.42, 'foobar', 3, 4, False, 3.14159]
print(type(a))
print(len(c))

# 인덱싱
print('>>>>>')
print('인덱싱')
print('d - ', type(d), d)
print('d - ', d[1])
print('d - ', d[0] + d[1] + d[1])
print('d - ', d[-1])
print('e - ', e[-1][1])
print('e - ', list(e[-1][1]))

# 슬라이싱
print('>>>>>')
print('리스트 슬라이싱')
print('d - ', d[0:3])
print('d - ', d[2:])
print('e - ', e[-1][1:3])

# 리스트 연산
print('>>>>>')
print('리스트 연산')
print('c + d', c + d)
print('c + d', d + c)
print('c * 3', c * 3)
# print("'Test' + c[0]", 'Test'+c[0]) 문자열과 정수이기 때문에 error
print("'Test' + c[0]", 'Test'+str(c[0]))

# 값 비교
print(c)
print(c[:3] + c[3:])
print(c == c[:3] + c[3:])
print()

# Identity(id)
temp = c
print(temp, c)
print(id(c))
print(id(temp))

# 리스트 수정, 삭제
print(">>>>>")
c[0] = 4
print('c - ', c)
c[1:2] = ['a', 'b', 'c']
print(c)
c[1:2] = [['a', 'b', 'c']] # 슬라이스를 사용한 경우에는 대 괄호를 사용해야 리스트로 들어간다.(대괄호 사용하지 않으면 원소로 들어간다.)
print('c - ', c)
c[2] = ['a', 'b', 'c'] # 배열의 index에 리스트를 넣는 경우에는 대괄호를 사용하지 않아도 리스트로 들어간다.
print('c - ', c)
c[1:3] = []
print('c - ', c)

#c[1:3] = []
del c[2]
print('c - ', c)

### 리스트 함수
print('리스트 함수')
a = [5, 2, 3, 1, 4]
print('a  - ', a)
# a[5] = 10 -> error
a.append(10) # 리스트 끝에 원소 추가
print('a - ', a)
a.sort() # 기본 오름정렬
print('a - ', a)
a.reverse()
print('a - ', a) # 내림차순 정렬
print('a - ', a.index(3), a[3])
a.insert(2, 7)
print('a - ', a)
a.reverse()
print('a - ', a)

# del a[9543]
a.remove(10) #지우고자 하는 값을 입력
print('a - ', a)

print('a - ', a.pop()) #리스트에서 마지막 index에 해당하는 원소를 가져오고 지운다.
print('a - ', a)

print('a - ', a.pop())
print('a - ', a)
# 위와 같이 lifo(last in first out) : 마지막에 들어온 애가 가장 먼저 나가는 것.
# 접시를 쌓았을 때, 마지막에 쌓은 접시를 가장 먼저 뺄 수 있듯이
# 반대로 먼저 들어온 것을 빼는 것은 Queue라고 한다. fifo(first in first out)

print('a -  ', a.count("사과")) # 찾는 값이 몇개가 중복되는지 확인


ex = [8, 9]
a.extend(ex)
print('a - ', a)

# 삭제 : remove, pop, del
# 반복문 활용
while a: #a가 pop함수로 비워질 떄까지 반복
    data = a.pop()
    print(data)