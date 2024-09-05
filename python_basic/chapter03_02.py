"""
    문자형 사용법
    - 문자형 중요성
    - 문자형 출력
    - 이스케이프
    - 멀티 라인
    - 문자형 연산
    - 문자형 형 변환
    - 인덱싱
    - 문자열 함수
    - 슬라이싱
"""

# Chapter03-2
# 파이썬 문자형
# 문자형 중요

# 문자열 생성
str1 = "I am Python"
str2 = 'Python'
str3 = """How are you?"""
str4 = '''Thank you!'''

print(type(str1), type(str2),type(str3),type(str4))
print(len(str1), len(str2),len(str3),len(str4))

# 빈 문자열
str1_t1 = ''
str2_t2 = str()

print(type(str1_t1), len(str1_t1))
print(type(str2_t2), len(str2_t2))

# 이스케이프 문자 사용
"""
    참고: Escape 코드
    \n : 개행
    \t : 탭
    \\ : 문자
    \' : 문자
    \" : 문자
    \000 : 널 문자
"""

# I'm Boy

print("I'm Boy")
print('I\'m Boy')

print('a \t b')
print('a \n b')
print('a \"\" b')

escape_str1 = "Do you have a \"retro games\"?"
print(escape_str1)
escape_str2 = 'What\'s on Tv?'

# 탭, 줄 바꿈
t_s1 = "Click \t Start!"