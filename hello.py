from cs50 import get_string,get_int,get_float

answer = get_string("how are you, ")
answer = answer.lower()
if answer in ['fine']:
     print("welcome ")
else:print("hoping for better ") 
q='+'
w='/'
e='*'
r='-'
z=get_string('choose a option a = +, b = -, c=*, d=/ ')
if z == '':
    print("thank you for using basic caluclator ")
elif z == 'a':
     x=get_float('what is your first no? ')
     y=get_float('what is your second no? ')
     print(x + y)
elif z == 'b':
     x=get_float('what is your first no? ')
     y=get_float('what is your second no? ')
     print(x - y)
elif z == 'c':
     x=get_float('what is your first no? ')
     y=get_float('what is your second no? ')
     print(x * y)
elif z == 'd':
     x=get_float('what is your first no? ')
     y=get_float('what is your second no? ')
     print(x / y)
else:
    print("thank you")


def problemSolver():
     m=int(input('the max number')) + 9
     