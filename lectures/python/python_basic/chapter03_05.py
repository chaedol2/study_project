# Chapter03-5
# 파이썬 딕셔너리
# 범용적으로 가장 많이 사용
# 딕셔너리 자료형(순서x, 키 중복x, 수정o, 삭제o)

# 선언
a = {'name':'Kim', 'Phone':'01033337777', 'birth':'910406'}
b = {0:'Hello Python'}
c = {'arr':[1, 2, 3, 4]}
d = {
    'Name':'Niceman',
    'City':'Seoul',
    'Age':33,
    'Grade':'A',
    'Status':True
}

e = dict([
    ('Name', 'Niceman'),
    ('City', 'Seoul'),
    ('Age', 33),
    ('Grade', 'A'),
    ('Status', True),
])

f = dict(
    Name='Niceman',
    City='Seoul',
    Age=33,
    Grade='A',
    Status=True
)

f1 = dict(
    Name='Niceman',
    City='Seoul',
    Age=33,
    Grade='A',
    Status=True
)

f2 = dict(
    Name='Niceman',
    City='Seoul',
    Age=33,
    Grade='A',
    Status=True
)

f_li = [f1, f2]

print(f_li)

print('a - ', type(a), a)
print('b - ', type(b), b)
print('c - ', type(c), c)
print('d - ', type(d), d)
print('e - ', type(e), e)
print('f - ', type(f), f)
print()

print('get함수')
print('a - ', a['name']) # 존재x -> 에러발생
print('a - ', a.get('name1')) # 존재x -> None 퍼리
print('b - ', b[0])
print('b - ', b.get(0))
print('f - ', f.get('City'))
print('f - ', f.get('Age'))
print()

# 딕셔너리 추가
print('딕셔너리 추가')
a['address'] = 'seoul'
print('a - ', a)
a['rank'] = [1,2,3]
print('a - ', a)
print()

# 딕셔너리 추가
print('a - ', len(a))
print('b - ', len(b))
print('c - ', len(c))
print('d - ', len(d))
print()

# 딕셔너리 함수
# 주로 반복문을 사용하기 위해서 나온 함수들이 많다.
# dict_keys, dict_values, dict_items : 반복문(__iter__)에서 사용 가능
print('딕셔너리 함수')
print('a - ', a.keys()) # 키만 가져온다.
print('b - ', b.keys())
print('c - ', c.keys())
print('d - ', d.keys())
print()

print('a - ', list(a.keys()))
print('b - ', list(b.keys()))
print()

print('a - ', a.values())
print('b - ', b.values())
print('c - ', c.values())
print()

#키와 값을 전부 가져온다.
print('a - ', a.items())
print('b - ', b.items())
print('c - ', c.items())
print()

print('a - ', list(a.items()))
print('b - ', list(b.items()))
aa = list(a.items())
print(aa[1])
print()

print('a  -', a.pop('name'))
print('a - ', a)
print()

print('c  -', c.pop('arr'))
print('c - ', c)
print()

print('f - ', f.popitem())
print('f - ', f)
print()

#  키를 포함하고 있는지 조회
print('a - ', 'birth' in a)
print('a - ', 'City' in d)


# 수정 & 추가
print('수정&추가')
print('a - ', a)
a['test'] = 'test_dict'
print('a - ', a)

a['address'] = 'dj'
print('a - ', a)
# 이것을 위한 메서드가 있다. update()
a.update(birth='990904')
print('a - ', a)

temp = {'address':'Busan'}
a.update(temp)
print('a - ', a)

# 딕셔너리 길이