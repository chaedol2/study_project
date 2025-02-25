# Chapter08-1
# 파이썬 내장(Built-in) 함수
# 자주 사용하는 함수 위주로 실습
# 사용하다 보면 자연스럽게 숙달
# str(), int(), tuple(), set(), len() 형변환 이미 학습

# 절대값
# abs()

print(abs(-3)) # 3

# all, any : iterable 요소 검사(참, 거짓)
# all : 모두가 참일 때 참
print(all([1,2,3])) # True
print(all([1,2,0])) # False
print(all([1,2,''])) # False

# any : 하나라도 참이면 참
print(any([1,2,3])) # True
print(any([1,2,0])) # True
print(any([1,2,''])) # True

# chr : 아스키 -> 문자, ord : 문자 -> 아스키
print(chr(44)) # ,
print(ord(',')) # 44

# enumerate : 인덱스 + Iterable 객체 생성
for i, v in enumerate(['tic', 'tac', 'toe']):
    print(i+1, v) # 인덱스, 밸류

# filter : 반복 가능한 객체 요소를 지정한 함수 조건에 맞는 값 추출
def conv_pos(x):
    return abs(x) > 2

print(list(filter(conv_pos, [1, -3, 2, 0, -5, 6])))
print(list(filter(lambda x:abs(x)>2, [1, -3, 2, 0, -5, 6])))

# id : 객체의 주소값(레퍼런스) 반환

print(id(int(5))) # 140726771545000
print(id(4)) # 140726771544968

# len : 요소의 길이 반환
print(len('abcdefg')) # 7
print(len([1,2,3,4,5,6,7])) # 7

# max, min : 최대값, 최소값

print(max([1,2,3])) # 3
print(max('python study')) # y
print(min([1,2,3])) # 1
print(min('python study')) # 공백

# map : 반복 가능한 객체 요소를 지정한 함수 실행 후 추출
def conv_abs(x):
    return abs(x)

print(list(map(conv_abs, [1, -3, 2, 0, -5, 6])))
print(list(map(lambda x:abs(x), [1, -3, 2, 0, -5, 6])))

# pow : 제곱값 반환
print(pow(2, 10)) # 1024

# range : 반복 가능한 객체(Iterable) 반환
print(range(1,10,2))
print(list(range(1,10,2)))
print(list(range(1,-15,-1)))

# round : 반올림
print(round(6.5781, 2)) # 6.58
print(round(5.4)) # 5

# sorted : 반복 가능한 객체(Iterable) 정렬 후 반환
print(sorted([6,7,4,3,1,2])) # [1, 2, 3, 4, 6, 7] 오름차순

a = sorted([6,7,4,3,1,2])
print(a) # [1, 2, 3, 4, 6, 7] 오름차순

print(sorted(['p','y','t','h','o','n'])) # ['h', 'n', 'o', 'p', 't', 'y'] 알파벳 순서

# sum : 반복 가능한 객체(Iterable) 합 반환
print(sum([6,7,8,9,10])) # 40
print(sum(range(1,101))) # 5050

# type : 자료형 확인
print(type(3)) # <class 'int'>
print(type({})) # <class 'dict'>
print(type({3,4})) # <class 'set'>
print(type(())) # <class 'tuple'>
print(type([])) # <class 'list'>

# zip : 반복 가능한 객체(Iterable)의 요소를 묶어서 반환
print(list(zip([10,20,30], [40,50,60]))) # [(10, 40), (20, 50), (30, 60)] 튜플 형태로 묶어서 반환
print(list(zip([10,20,30], [40,50]))) # [(10, 40), (20, 50)] 짧은 길이의 리스트에 맞춰서 반환

