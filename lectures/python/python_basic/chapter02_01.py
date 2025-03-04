# Chapter02-1
# 파이썬 완전 기초
# Print 사용법
# 참조 : https://www.python-course.eu/python3_formatted_output.php

"""
참고 : Escape 코드

\n : 개행
\t : 탭
\\ : 문자
\' : 문자
\" : 문자
\000 : 널 문자
"""

# 기본 출력
print('Python Start!')
print("Python Start!")
print('''Python Start!''')
print("""Python Start!""")

print()

# separator 옵션
print('P', 'Y', 'T', 'H', 'O', 'N', sep='')
print('010', '7777', '1234', sep='-')
print('python', 'google.com', sep='@')

print()

# end 옵션
print('Welcome to', end=' ')
print('IT News', end=' ')
print('Web Site')

# file 옵션
import sys
print('Learn Python', file=sys.stdout)

print()

# format 사용(d : 3, s : 'python', f : 3.142312)
print('%s %s' % ('one', 'two'))
print('{} {}'.format('one', 'two'))
print('{1} {0}'.format('one','two'))

print()

# %s
print('%10s' % ('nice'))
print('{:>10}'.format('nice'))
print('%-10s' % ('nice'))
print('{:10}'.format('nice'))
print('{:_>10}'.format('nice'))
print('{:^10}'.format('nice'))

#절삭
print('%.5s' % ('nice'))
print('%.5s' % ('pythonstudy'))
print('{:10.5}'.format('pythonstudy'))

# %d
print('%d %d' % (1,2))
print('{} {}'.format(1,2))
print('%4d' % (42323231))
print('{:4d}'.format(42))

# %f
print('%f' % (3.14124124))
print('{:4f}'.format(3.14124124))
print('%06.2f' % (3.1458283821382381))
print('{:06.2f}'.format(3.1458283821382381))