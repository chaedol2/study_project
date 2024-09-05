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
print(escape_str2)

# 탭, 줄 바꿈
t_s1 = "Click \t Start!"
t_s2 = "New Line \n Check!"

print(t_s1)
print(t_s2)
print()

# Raw String
# 이스케이프 문자를 사용안함.
raw_s1 = r'D:\python\text'
print(raw_s1)
print()

# 멀티라인 입력
multi_str = \
"""
문자열
멀티라인 입력
테스트
""" \
'dsjfl';
print(multi_str)

# 문자열 연산
str_o1="Python"
str_o2="Apple"
str_o3="How are you doing"
str_o4="Seoul! Daejeon! Busan! Jinju"

print(str_o1 * 3)
print(str_o1 + str_o2)
# 시퀀스 타입은 in 연산자로 확인가능하다.
print('y' in str_o1)
print('n' in str_o1)
print('P' not in str_o2)

# 문자열 형 변환
print(str(66), type(str(66)))
print(str(10.1))
print(str(True), type(str(True)))

# 문자열 함수(upper, isalnum, startswith, count, endswith, isalpha...)
# 첫 글자를 대문자료 변환하여 반환
print("Capitalizm : ", str_o1.capitalize())
# 끝 글자를 비교하여 불린 반환
print("endswith?: ", str_o2.endswith("!"))
# 문자열의 특정 문자를 변경 후 반환
print("replace", str_o1.replace("thon", " Good"))
# 문자열을 정렬하여 리스트로 반환
print("sorted: ", sorted(str_o1))
# 특정 문자를 기준으로 나누어 리스트 반환
print("split: ", str_o4.split('!'))

# 반복(시퀀스)
im_str = "Good Boy!"

# dir을 통해 im_str변수에서 사용가능한 클래스들을 확인할 수 있다. iter를 사용해보자.
print(dir(im_str)) # __iter__
# 출력
for i in im_str:
    print(i)

# 출력
for i in im_str:
    print(i)

# 슬라이싱
str_sl = "Nice Python"

# 슬라이싱 연습
print(str_sl[0:3]) # 0, 1, 2 index 출력
print(str_sl[5:]) #[5:11]과 같다.
print(str_sl[:len(str_sl)]) # 전체 출력 str_sl[:11]
print(str_sl[:len(str_sl)-1]) # 전체 출력 str_sl[:10]
print(str_sl[1:9:2]) # 3번째는 스텝을 나타낸다.
print(str_sl[-5:]) # 끝에서 5번째 부터 끝까지 str_sl[6:] 과같다.
print(str_sl[1:-2])
print(str_sl[::2]) # 처음부터 끝까지 2스텝으로 가져온다.
print(str_sl[::-1]) # 음수로 -1 스탭이기 때문에 거꾸로 출력된다.

# 아스키 코드
a = 'z'
print(ord(a)) # 아스키 코드로
print(chr(122)) # 문자로