# Chapter06-1
# 파이썬 클래스
# OOP(객체 지향 프로그래밍), Self, 인스턴스 메소드, 인스턴스 변수

# 클래스 and 인스턴스 차이 이해
# 네임스페이스 : 객체를 인스턴스화 할 때 저장된 공간
# 클래스 변수 : 직접 접근 가능
# 인스턴스 변수 : 객체마다 별도 존재

# 예제1
class Dog: # object 상속
    # 클래스 속성
    species = 'firstdog'

    # 초기화/인스턴스 속성
    def __init__(self, name, age):
        self.name = name
        self.age = age

# 클래스 정보
print(Dog)

# 인스턴스화
a = Dog("mikky", 2)
b = Dog("baby", 3)
c = Dog("mikky", 2)

# 비교
print(a == b, id(a), id(b), id(c)) # False 2266833449744 2266833449680 2266833449872

# 네임스페이스
print('dog1', a.__dict__) # {'name': 'mikky', 'age': 2}
print('dog2', b.__dict__) # {'name': 'baby', 'age': 3}

# 인스턴스 속성 확인
print('{} is {} and {} is {}'.format(a.name, a.age, b.name, b.age)) # mikky is 2 and baby is 3

if a.species == 'firstdog':
    print('{0} is a {1}'.format(a.name, a.species)) # mikky is a firstdog

print(Dog.species) # firstdog
print(a.species) # firstdog
print(b.species) # firstdog

# 예제2
# self의 이해
class SelfTest:
    def func1():
        print('Func1 called')
    def func2(self):
        print(id(self))
        print('Func2 called')

f = SelfTest()

print(dir(f))
'''
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'func1', 'func2']
'''

# class 내부에 self를 사용하는 함수 => 인스턴스 메소드
# class 내부에 self를 사용하지 않는 함수 => 클래스 메소드
print(id(f)) # 2255324272336
# f.func1() # TypeError: SelfTest.func1() takes 0 positional arguments but 1 was given
SelfTest.func1()
# SelfTest.func2() # TypeError: SelfTest.func2() missing 1 required positional argument: 'self'
SelfTest.func2(f)
f.func2()

# 예제3
# 클래스 변수, 인스턴스 변수
class Warehouse:
    # 클래스 변수
    stock_num = 0 # 재고

    def __init__(self, name):
        # 인스턴스 변수
        self.name = name
        Warehouse.stock_num += 1
    
    def __del__(self):
        Warehouse.stock_num -= 1

user1 = Warehouse('Lee')
user2 = Warehouse('Cho')

print(Warehouse.stock_num) # 2
# Warehouse.stock_num = 50
print(user1.name) # Lee
print(user2.name) # Cho
print(user1.__dict__) # {'name': 'Lee'}
print(user2.__dict__) # {'name': 'Cho'}
print(Warehouse.__dict__) # {'__module__': '__main__', 'stock_num': 2, '__init__': <function Warehouse.__init__ at 0x000001F30C5B3060>, '__del__': <function Warehouse.__del__ at 0x000001F30C5B3100>, '__dict__': <attribute '__dict__' of 'Warehouse' objects>, '__weakref__': <attribute '__weakref__' of 'Warehouse' objects>, '__doc__': None}
print('>>>', user1.stock_num)

del user1
print(Warehouse.__dict__) # {'__module__': '__main__', 'stock_num': 1, '__init__': <function Warehouse.__init__ at 0x000001EA9C8B3100>, '__del__': <function Warehouse.__del__ at 0x000001EA9C8B2F20>, '__dict__': <attribute '__dict__' of 'Warehouse' objects>, '__weakref__': <attribute '__weakref__' of 'Warehouse' objects>, '__doc__': None}

# 예제4
class Dog2: # object 상속
    # 클래스 속성
    species = 'firstdog'

    # 초기화/인스턴스 속성
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        return '{} is {} years old'.format(self.name, self.age)

    def speak(self, sound):
        return '{} says {}'.format(self.name, sound)
    
# 인스턴스 생성
c = Dog2('july', 4)
d = Dog2('Marry', 10)
# 메소드 호출
print(c.info()) # july is 4 years old
print(d.info()) # Marry is 10 years old
# 메소드 호출
print(c.speak('Wal Wal')) # july says Wal Wal
print(d.speak('Mung Mung')) # Marry says Mung Mung