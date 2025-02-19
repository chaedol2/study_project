# Chapter04-1
# 파이썬 제어문
# IF 실습

### 기본 형식
print(type(True)) # 0이 아닌 수, "abc", [1,2,3..], (1,2,3..) ...
print(type(False)) # 0, "", [], (), {}... 비어있거나 부정적 ...

# 예1
if True:
    # 들여쓰기(indent)를 하지 않으면 error 발생
    print('Good')

if False:
    print('none Good')

if 'a':
    print('a Good')

if False:
    print('Bad')

# 예2
if False:
    print('Bad!')
else:
    print('Good!')

if True:
    print('Bad!')
else:
    print('Good!')

### 관계 연산자
# >, >=, <, <=, ==, !=
x = 15
y = 10

# 양 변이 같은 경우 참
print(x == y)

# 양 변이 다른 경우 참
print(x != y)

# 왼쪽이 클 때 참
print(x > y)

# 왼쪽이 크거나 같을 때 참
print(x >= y)

# 오른쪽이 클 때  참
print(x < y)

# 오른쪽이 크거나 같을 때 참
print(x <= y)

# 예3
city = ""
if city:
    print("You are in:", city)
else:
    print("Plz enter your city")

# 예4
city2 = "Seoul"
if city2:
    print("You are in:", city2)
else:
    print("Plz enter your city")


### 논리 연산자
# and, or, not

a = 75
b = 40
c = 10

print('and:', a > b and b > c) #a > b > c
print('or:', a > b or b > c) #한쪽만 같으면 가능
print('not:', not a > b)
print('not:', not b > c)
print(not True)
print(not False)

# 산술, 관계, 논리 우선순위
print('e1:', 3+12 > 7+3)
# 우선순위 : 산술 > 관계 > 논리
print('e2:', 5 + 10 * 3 > 7 + 3 * 20)
print('e3:', 5 + 10 > 3 and 7 + 3 == 10)
print('e4:', 5 + 10 > 0 and not 7 + 3 == 10)
print('ee:', 5 > 3 and not 2 > 3)

score1 = 89
score2 = 'A'

# 복수의 조건이 모두 참일 경우에 실행
if score1 >= 90 and score2 == 'A':
    print('Pass')
else:
    print('Fail')

# 예5
id1 = 'vip'
id2 = 'admin'
grade = 'platinum'

if id1 == 'vip' or id2 == 'admin':
    print('관리자 입장')

if id2 == 'admin' and grade == 'platinum':
    print('최상위 관리자')

### 다중조건문
# 예6

num = 79
if num >= 90:
    print('Grade : A')
elif num >= 80:
    print('Grade : B')
elif num >= 70:
    print('Grade : C')
else:
    print('과락')


### 중첩 조건문
# 예7
grade = 'A'
total = 95

if grade == 'A':
    if total >= 90:
        print('장학금 100%')
    elif total >= 80:
        print('장학금 80%')
    else:
        print('장학금 50%')
else:
    print('장학금 없음')

# in, not in
q = [10, 20, 30]
w = {70, 80, 90, 100}
e = {'name':'Lee', 'city':'Seoul', 'grade':'A'}
r = (10, 12, 14)

print(15 in q)
print(90 in w)
print( 12 not in r)
print('name' in e)
print('Seoul' in e.values())