# Chapter05-1
# 파이썬 함수 및 중요성
# 파이썬 함수식 및 람다(lambda)

# 함수 정의 방법
# def function_name(parameter):
#     code

# 예제1
def first_func(w):
    print("Hello, ", w)

word = "Goodboy"

first_func(word)

# 예제2
def return_func(w1):
    value="Hello, " + str(w1)
    return value

x = return_func('Goodboy2')
print(x)

# 예제3(다중반환)

def func_mul(x):
    y1 = x * 10
    y2 = x * 20
    y3 = x * 30
    return y1, y2, y3

x, y, z = func_mul(10)

print(x,y,z)

# 튜플 리턴
def func_mul2(x):
    y1 = x * 10
    y2 = x * 20
    y3 = x * 30
    return (y1, y2, y3)

q = func_mul2(20)

print(type(q), q, list(q))

# 리스트 리턴
def func_mul3(x):
    y1 = x * 10
    y2 = x * 20
    y3 = x * 30
    return [y1, y2, y3]

p = func_mul3(30)

print(type(p), p, set(p))

# 딕셔너리 리턴
def func_mul4(x):
    y1 = x * 10
    y2 = x * 20
    y3 = x * 30
    return {'v1': y1, 'v2': y2, 'v3': y3}

d = func_mul4(40)

print(type(d), d, d.get('v2'), d.items(), d.keys())

# 중요
# *args, **kwargs

# *args(언팩킹) : 튜플 형태태
def args_func(*args): # 매개변수 명 자유
    for i, v in enumerate(args):
        print('Result : {}'.format(i), v)
    print('-----')

args_func('Lee')
args_func('Lee', 'Park')
args_func('Lee', 'Park', 'Kim')

# kwargs(언팩킹) : 딕셔너리 형태
def kwargs_func(**kwargs): # 매개변수 명 자유
    for v in kwargs.keys():
        print('{}'.format(v), kwargs[v])
    print('-----')

kwargs_func(name1='Lee')
kwargs_func(name1='Lee', name2='Park')
kwargs_func(name1='Lee', name2='Park', name3='Cho')

# 전체 혼합
def example(args_1, args_2, *args, **kwargs):
    print(args_1, args_2, args, kwargs)

example(10, 20, 'Lee', 'Kim', 'Park', 'Cho', age1=20, age2=30, age3=40)

# 중첩함수(클로저 개념 파이썬에서도 사용 가능하다.)
def nested_func(num):
    def func_in_func(num):
        print(num)
    print("In func")
    func_in_func(num + 100)

nested_func(100)
# func_in_func(1000) => 함수 내부에 있는 함수는 정의 되지 않기 때문에 밖에서 사용할 수 없다.

# 람다식 예제
# 메모리 절약, 가독성 향상, 코드 간결
# 함수는 객체 생성 -> 리소스(메모리) 할당
# 람다는 즉시 실행 함수(Heap 초기화) -> 메모리 초기화
# 람다 함수를 너무 남발할 경우 가독성이 오히려 감소한다.

def mul_func(x, y):
    return x * y

# lambda 식으로 작성 => 함수의 이름이 없다.
# 변수에 담아서 사용하거나 즉시 사용할 수 있다.
a = lambda x, y: x*y
a(5,6)

# 일반적 함수 -> 할당
def mul_func(x,y):
    return x*y

print(mul_func(10,50))

mul_func_var = mul_func
print(mul_func_var(20, 50))

# 람다 함수 -> 할당
lambda_mul_func = lambda x, y: x*y
print(lambda_mul_func(50, 50))

def func_final(x, y, func):
    print('>>>>', x * y * func(100, 100))

# 람다식 함수 바로 사용
func_final(10, 20, lambda x, y: x*y)
# 일반 함수 변수로 사용
func_final(10, 20, mul_func_var)
# 람다 함수 변수로 사용
func_final(10, 20, lambda_mul_func)