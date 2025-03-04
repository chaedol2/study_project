# Chapter07-1
# 파이썬 예외처리의 이해
# 예외 종류
# SyntaxError, TypeError, NameError, IndexError, ValueError, KeyError, AttributeError
# FileNotFoundError, ZeroDivisionError, ...
# 문법적으로는 예외가 없지만, 코드 실행 프로세스(단계) 발생하는 예외도 중요
# 1. 예외는 반드시 처리되어야 한다.
# 2. 로그는 반드시 남긴다.
# 3. 예외는 던져진다.
# 4. 예외 무시

# SyntaxError: 문법 오류

# print('error) # SyntaxError: unterminated string literal (detected at line 13)
# print('error')) # SyntaxError: unmatched ')'
# if True # SyntaxError: expected ':'

# NameError: 참조 없음

# a=10
# b=15
# print(c) # NameError: name 'c' is not defined

# ZeroDivisionError

# print(100/0) # ZeroDivisionError: division by zero

# IndexError

# x=[50,70,90]
# print(x[1])
# print(x[4]) # IndexError: list index out of range

# print(x.pop())
# print(x.pop())
# print(x.pop())
# print(x.pop()) # IndexError: pop from empty list

# KeyError
# dic = {'name': 'Lee', 'Age': 41, 'City': 'Busan'}
# print(dic['hobby']) # KeyError: 'hobby'
# print(dic.get('hobby')) # None

# 예외 없는 것을 가정하고 프로그램 작성 -> 런타임 예외 발생 시 예외 처리 권장(EAFP 코딩 스타일)

# AttributeError: 모듈, 클래스에 있는 잘못된 속성 사용 예외
# import time
# print(time.time2()) # AttributeError: module 'time' has no attribute 'time2'

# ValueError

# x = [10, 50, 90]
# x.remove(50)
# print(x)
# x.remove(200) # ValueError: list.remove(x): x not in list

# FileNotFoundError

# f = open('test.txt') # FileNotFoundError: [Errno 2] No such file or directory: 'test.txt'

# TypeError: 자료형에 맞지 않는 연산을 수행 할 경우
# x = [1,2]
# y = (1,2)
# z = 'test'

# print(x + y) # TypeError: can only concatenate list (not "tuple") to list
# print(x + z) # TypeError: can only concatenate list (not "str") to list
# print(y + z) # TypeError: can only concatenate tuple (not "str") to tuple

# print(x + list(y)) # [1, 2, 1, 2]
# print(x + list(z)) # [1, 2, 't', 'e', 's', 't']

# 예외 처리 기본
# try: 에러가 발생 할 가능성이 있는 코드 실행
# except 에러명1: 여러개 가능
# except 에러명2:
# else: try 블록의 에러가 없을 경우 실행
# finally: 항상 실행

name = ['Kim', 'Lee', 'Park']

# 예제1
# try:
#     z = 'Kim' # 'Cho'로 변경하면 ValueError 발생
#     x = name.index(z)
#     print('{} Found it! {} in name'.format(z, x+1))
# except ValueError:
#     print('Not Found it! - Occurred ValueError!')
# else:
#     print('Ok! else.')

# print()

# 예제2
# try:
#     z = 'Cho' # 'Cho'로 변경하면 ValueError 발생
#     x = name.index(z)
#     print('{} Found it! {} in name'.format(z, x+1))
# except Exception:
#     print('Not Found it! - Occurred ValueError!')
# else:
#     print('Ok! else.')

# print()

# 예제3
# try:
#     z = 'Cho' # 'Cho'로 변경하면 ValueError 발생
#     x = name.index(z)
#     print('{} Found it! {} in name'.format(z, x+1))
# except Exception as e:
#     print(e)
#     print('Not Found it! - Occurred ValueError!')
# else:
#     print('Ok! else.')
# finally:
#     print('Ok! finnaly!')

# print()

# 예제4
# 예외 발생 : raise
# raise 키워드로 예외 직접 발생

try:
    a = 'Park'
    if a == 'Cho':
        print('Ok! Pass!')
    else:
        raise ValueError
except ValueError:
    print('Occurred! Exception!')
else:
    print('Ok! else!')

