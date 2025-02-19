# Chpater03-6
# 집합(Sets) 특징
# 집합(Set) 자료형(순서x, 중복x)

# 공학자가 공학을 위해서 파이썬을 사용할 때
# 많은 데이터를 집합 형태로 저장해서
# 계산에 이용하기 위해 사용한다.

# 집합 선언
a = set()
print(type(a))
b = set([1, 2, 3, 4, 4, 4, 4]) # 중복 허용X
c = set([1, 4, 5, 6])
d = set([1, 2, 'Pen', 'Cap', 'Plate'])
e = {'foo', 'bar', 'baz', 'foo', 'qux'}
f = {42, 'foo', (1, 2, 3), 3.14159}

print('a - ', type(a), a, 2 in b)
print('b - ', type(b), b)
print('c - ', type(c), c)
print('d - ', type(d), d)
print('e - ', type(e), e)
print('f - ', type(f), f)

# 투플 변환(set -> tuple)
t = tuple(b)
print('t - ', type(t), t)
print('t - ', t[0], t[1:3])

# 리스트 변환(set -> list)
l = list(c)
l2 = list(e)

print('l - ', l)
print('l2 - ', l2)

# 길이
print(len(a))
print(len(b))
print(len(c))
print(len(d))
print(len(e))
print(len(f))
print()

# 집합 자료형 활용
s1 = set([1, 2, 3, 4, 5, 6])
s2 = set([4, 5, 6, 7, 8, 9])

# 교집합
print('s1 & s2 : ', s1 & s2)
print('s1 & s2 : ', s1.intersection(s2))

# 합집합
print('s1 | s2 : ', s1 | s2)
print('s1 | s2 : ', s1.union(s2))

# 차집합
print('s1 - s2 : ', s1 - s2)
print('s1 | s2 : ', s1.difference(s2))

### 중복 원소 확인

# 교집합 확인
print('s1 & s2 : ', s1.isdisjoint(s2))
# -> 교집합이 있으면 false 없으면 True -> dis가 붙어서 반대로 나온 것.

# 부분 집합 확인
print('subset : ', s1.issubset(s2))
# s1이 s2의 부분집합인지 확인 -> 부분 집합이면 True
print('superset : ', s1.issuperset(s2))

# 추가 & 제거
s1 = set([1, 2, 3, 4])
# 리스트에서는 append, insert 등을 통해 인덱스로 접근했었음
# set에서는 add()라는 메서드가 따로 있다.
s1.add(100) # 뭐지 왜 100을 넣으면 4 앞에 들어가지
s1.add(5)
print('s1 - ', s1)

s1.remove(2) #제거
print('s1 - ', s1)
# 참고) 존재하지 않는 원소를 넣으면 KeyError 예외 발생
s1.discard(3) #이 메서드는 예외가 발생하지 않는다. 매우 중요★
print('s1 - ', s1)

#전부 싹 지우고 싶을 땐
s1.clear()
print('s1 - ', s1)