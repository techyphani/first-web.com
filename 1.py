import cs50
import sys
import pyttsx3

a=pyttsx3.init()
a.say('Hello welcome')
a.runAndWait()

if True:
    try:
     a.say('you are pleased to tell me your name')
     a.runAndWait()
     n=str(input('Tell me your name? '))
     print('hello ' , n )
     a.say('hello ' + n)
     a.runAndWait()
    except TypeError:
         print('please tell your name ')
try:
 a.say('tell me your first number' + n)
 a.runAndWait()
 p=int(input('tell your first number '))
 a.say('tell me your second number' + n)
 a.runAndWait()
 b=int(input('tell me your second number '))
 a.say('tell me your third number' + n)
 a.runAndWait()
 c=int(input('tell me your third number '))
 d=p,b,c
 a.say('your three numbers are ' + n)
 a.runAndWait()
 print(d)
 l=sum(d)/len(d)
 print(l)
except ValueError:
    print('pls tell me int start again')
except NameError:
    print('pls tell me int start again')