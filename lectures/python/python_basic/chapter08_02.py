# Chapter08-2
# 파이썬 외장(External) 함수
# 실제 프로그램 개발 중 자주 사용
# 종류 : sys, pickle, shutil, temfile, time, random 등

# 예제1
import sys
print(sys.argv)

# 예제2(강제 종료)
# sys.exit()

# 예제3(파이썬 패키지 위치)
print(sys.path)

# pickle : 객체 파일 읽기, 쓰기
import pickle

# 예제4(쓰기)
f = open("test.obj", "wb")
obj = {1:'python', 2:'study', 3:'basic'}
pickle.dump(obj, f)
f.close()

# 예제5(읽기)
f = open("test.obj", "rb")
data = pickle.load(f)
print(data, type(data))
f.close()

# os : 환경 변수, 디렉토리(파일) 처리 관련, 운영체제 작업  
# mkdir, rmdir(비어있으면 삭제), rename

# 예제6
import os
print(os.environ) # 운영체제의 환경 변수
'''
environ({'ALLUSERSPROFILE': 'C:\\ProgramData', 'APPDATA': 'C:\\Users\\User\\AppData\\Roaming', 'CHROME_CRASHPAD_PIPE_NAME': '\\\\.\\pipe\\crashpad_13420_YAJYPUUBFEUOILZT', 'COMMONPROGRAMFILES': 'C:\\Program Files\\Common Files', 'COMMONPROGRAMFILES(X86)': 'C:\\Program Files (x86)\\Common Files', 'COMMONPROGRAMW6432': 'C:\\Program Files\\Common Files', 'COMPUTERNAME': 'DESKTOP-KVOOCOH', 'COMSPEC': 'C:\\WINDOWS\\system32\\cmd.exe', 'DRIVERDATA': 'C:\\Windows\\System32\\Drivers\\DriverData', 'EFC_18328': '1', 'FPS_BROWSER_APP_PROFILE_STRING': 'Internet Explorer', 'FPS_BROWSER_USER_PROFILE_STRING': 'Default', 'HOMEDRIVE': 'C:', 'HOMEPATH': '\\Users\\User', 'LOCALAPPDATA': 'C:\\Users\\User\\AppData\\Local', 'LOGONSERVER': '\\\\DESKTOP-KVOOCOH', 'NUMBER_OF_PROCESSORS': '16', 'ONEDRIVE': 'C:\\Users\\User\\OneDrive - howoocast', 'ONEDRIVECOMMERCIAL': 'C:\\Users\\User\\OneDrive - howoocast', 'ORIGINAL_XDG_CURRENT_DESKTOP': 'undefined', 'OS': 'Windows_NT', 'PATH': 'C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\Git\\cmd;C:\\Users\\User\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\User\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;;c:\\Users\\User\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\debugCommand;c:\\Users\\User\\.vscode\\extensions\\ms-python.debugpy-2025.0.1-win32-x64\\bundled\\scripts\\noConfigScripts', 'PATHEXT': '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC', 'PROCESSOR_ARCHITECTURE': 'AMD64', 'PROCESSOR_IDENTIFIER': 'AMD64 Family 25 Model 80 Stepping 0, AuthenticAMD', 'PROCESSOR_LEVEL': '25', 'PROCESSOR_REVISION': '5000', 'PROGRAMDATA': 'C:\\ProgramData', 'PROGRAMFILES': 'C:\\Program Files', 'PROGRAMFILES(X86)': 'C:\\Program Files (x86)', 'PROGRAMW6432': 'C:\\Program Files', 'PROMPT': '$P$G', 'PSMODULEPATH': 'C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules', 'PUBLIC': 'C:\\Users\\Public', 'SESSIONNAME': 'Console', 'SYSTEMDRIVE': 'C:', 'SYSTEMROOT': 'C:\\WINDOWS', 'TEMP': 'C:\\Users\\User\\AppData\\Local\\Temp', 'TMP': 'C:\\Users\\User\\AppData\\Local\\Temp', 'USERDOMAIN': 'DESKTOP-KVOOCOH', 'USERDOMAIN_ROAMINGPROFILE': 'DESKTOP-KVOOCOH', 'USERNAME': 'User', 'USERPROFILE': 'C:\\Users\\User', 'WINDIR': 'C:\\WINDOWS', 'TERM_PROGRAM': 'vscode', 'TERM_PROGRAM_VERSION': '1.97.2', 'LANG': 'en_US.UTF-8', 'COLORTERM': 'truecolor', 'PYDEVD_DISABLE_FILE_VALIDATION': '1', 'DEBUGPY_ADAPTER_ENDPOINTS': 'c:\\Users\\User\\.vscode\\extensions\\ms-python.debsers\\User\\AppData\\Local\\Temp', 'TMP': 'C:\\Users\\User\\AppData\\Local\\Temp', 'USERDOMAIN': 'DESKTOP-KVOOCOH', 'USERDOMAIN_ROAMINGPROFILE': 'DESKTOP-KVOOCOH', 'USERNAME': 'User', 'USERPROFILE': 'C:\\Users\\User', 'WINDIR': 'C:\\WINDOWS', 'TERM_PROGRAM': 'vscode', 'TERM_PROGRAM_VERSION': '1.97.2', 'LANG': 'en_US.UTF-8', 'COLORTERM': 'truecolor', 'Psers\\User\\AppData\\Local\\Temp', 'TMP': 'C:\\Users\\User\\AppData\\Local\\Temp', 'USERDOMAIN': 'DESKTOP-KVOOCOH', 'Users\\User\\AppData\\Local\\Temp', 'TMP': 'C:\\Users\\User\\AppData\\Local\\Temp', 'USERDOMAIN': 'DESKTOP-KVOOCOH', 'USERDOMAIN_ROAMINGPROFILE': 'DESKTOP-KVOOCOH', 'USERNAME': 'User', 'USERPROFILE': 'C:\\Users\\User', 'WINDIR': 'C:\\WINDOWS', 'TERM_PROGRAM': 'vscode', 'TERM_PROGRAM_VERSION': '1.97.2', 'LANG': 'en_US.UTF-8', 'COLORTERM': 'truecolor', 'PYDEVD_DISABLE_FILE_VALIDATION': '1', 'DEBUGPY_ADAPTER_ENDPOINTS': 'c:\\Users\\User\\.vscode\\extensions\\ms-python.debugpy-2025.0.1-win32-x64\\.noConfigDebugAdapterEndpoints\\endpoint-93e8bb156ed09312.txt', 'BUNDLED_DEBUGPY_PATH': 'c:\\Users\\User\\.vscode\\extensions\\ms-python.debugpy-2025.0.1-win32-x64\\bundled\\libs\\debugpy', 'GIT_ASKPASS': 'c:\\Users\\User\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh', 'VSCODE_GIT_ASKPASS_NODE': 'C:\\Users\\User\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe', 'VSCODE_GIT_ASKPASS_EXTRA_ARGS': '', 'VSCODE_GIT_ASKPASS_MAIN': 'c:\\Users\\User\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js', 'VSCODE_GIT_IPC_HANDLE': '\\\\.\\pipe\\vscode-git-023f6d9503-sock', 'PYTHONUSERBASE': 'C:\\Users\\User\\AppData\\Local\\Packages\\PythonSoftwareFoundation.Python.3.11_qbz5n2kfra8p0\\LocalCache\\local-packages'})
'''
print(os.environ['USERNAME'])

# 예제7(현재 경로)
print(os.getcwd()) # C:\Users\User\projects\study_project

# time : 시간 관련 처리
import time

# 예제8
print(time.time()) # 1740466440.5639975

# 예제9(형태 변환)
print(time.localtime(time.time())) 
# time.struct_time(tm_year=2025, tm_mon=2, tm_mday=25, tm_hour=15, tm_min=54, tm_sec=27, tm_wday=1, tm_yday=56, tm_isdst=0)

# 예제10(간단 표현)
print(time.ctime())
# Tue Feb 25 15:55:06 2025

# 예제11(형식 표현)
print(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time())))
# 2025-02-25 15:55:06

# 예제12(시간 간격 발생)
for i in range(5):
    print(i)
    time.sleep(1)

# random : 난수 리턴
import random

# 예제13
print(random.random()) # 0.0702506082645622 0~1 사이의 실수

# 예제14
print(random.randint(1, 45)) # 1~45 사이의 정수
print(random.randrange(1, 45)) # 1~44 사이의 정수

# 예제15(섞기)
d = [1,2,3,4,5]
random.shuffle(d) # 데이터의 테스트 케이스, 카드게임 등 활용
print(d)

# 예저16(무작위 선택)
c = random.choice(d) # 하나 임의로 선택
print(c)

# webbrowser : 본인 os의 웹 브라우저 실행
import webbrowser

webbrowser.open("http://google.com")
webbrowser.open_new("http://google.com") # 새창으로 열기

