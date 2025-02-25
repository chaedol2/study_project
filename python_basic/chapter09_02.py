# Chapter09-2
# CSV 파일 읽기 및 쓰기

# CSV : MIME 타입 - text/csv(ex. text/html, text/plain...)

import csv

# 예제1
with open('C:/Users/User/projects/study_project/python_basic/resource/test1.csv', 'r') as f:
    reader = csv.reader(f)
    # next(reader) # Header Skip

    # 객체 확인
    print(reader)
    # <_csv.reader object at 0x000001C9D4064F40>

    # 타입 확인
    print(type(reader))
    # <class '_csv.reader'>

    # 속성 확인
    print(dir(reader)) # '__iter__' 확인
    # ['__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__next__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'dialect', 'line_num']
    
    print()

    for c in reader:
        # 타입 확인(리스트)
        # print(type(c))
        
        # list to str
        print(' : '.join(c))

# 예제2
with open('C:/Users/User/projects/study_project/python_basic/resource/test2.csv', 'r') as f:
    reader = csv.reader(f, delimiter='|')

    for c in reader:
        print(c)

# 예제3
with open('C:/Users/User/projects/study_project/python_basic/resource/test1.csv', 'r') as f:
    reader = csv.DictReader(f)

    # 객체 확인
    print(reader)
    # <csv.DictReader object at 0x000001C9D408EF10>

    # 타입 확인
    print(type(reader))
    # <class 'csv.DictReader'>

    # 속성 확인
    print(dir(reader))
    # ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__next__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_fieldnames', 'dialect', 'fieldnames', 'line_num', 'reader', 'restkey', 'restval']

    for c in reader:
        for k, v in c.items():
            print(k, v)
        print('-------------------')


# 예제4
w = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15],[16,17,18],[19,20,21]]

with open('C:/Users/User/projects/study_project/python_basic/resource/write1.csv', 'w', encoding='UTF-8') as f:
    print(dir(csv))
    #  ['Dialect', 'DictReader', 'DictWriter', 'Error', 'QUOTE_ALL', 'QUOTE_MINIMAL', 'QUOTE_NONE', 'QUOTE_NONNUMERIC', 'Sniffer', 'StringIO', '_Dialect', '__all__', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', '__version__', 'excel', 'excel_tab', 'field_size_limit', 'get_dialect', 'list_dialects', 're', 'reader', 'register_dialect', 'unix_dialect', 'unregister_dialect', 'writer']

    wt = csv.writer(f)

    # dir 확인
    print(dir(wt))

    # 타입 확인
    print(type(wt))

    for v in w:
        wt.writerow(v)

# 예제5
with open('C:/Users/User/projects/study_project/python_basic/resource/write2.csv', 'w', encoding='UTF-8') as f:
    #  필드명
    fields = ['One', 'Two', 'Three']

    # Dict Writer
    wt = csv.DictWriter(f, fieldnames=fields)

    # Header Write
    wt.writeheader()

    for v in w:
        wt.writerow({'One': v[0], 'Two': v[1], 'Three': v[2]})