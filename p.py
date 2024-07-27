a=str(input('tell me your name '))
a1=str(input('are you male or female '))
a=a.upper()
a1=a1.lower()
if a1=='male':
 print('hello MR. ' + a)
elif a1=='female':
    print('hello MS. ' + a)
else:
    print('please say your gender')
print('This one app has lots of things')
print('Basic caluclator')
b=str(input('Do you want to use Basic caluclator '))
b=b.lower()

if b=='yes':
    x=int(input('Tell me your first no '))
    y=int(input('Tell me your second no '))
    print('the sum of given no is ' , x + y)
    print('the difference of given no is ' , x - y)
    print('the multiplication of given no is ' , x * y)
    print('the product of given no is ' , x / y)
elif b=='no':
    print('thank you')
else:
      print('you want to follow instructions')    
c='lets play a game'
d=str(input('do you want to play a game or not ? '))
if d=='yes':
    print(c , ' number game')
else:
    print('thank you')
e=str(input('do you want play number game or not? '))
e=e.lower()
if e=='yes':
   print('lets start') 
   print('you have only one chance ')
   try:
        f=int(input('guess a number from 0 to 9 '))
        if f== 0:  
         print('you are wrong')
        elif f==3:
         print('you are correct ')
         g=input('do want to enter into second level? ')
        elif f<= 2:
            print('you are wrong')
        elif f<= 9:
          print('you are wrong')
        if f==3 and g=='yes':   
         for f in range(1):
             h=int(input('guess a number from 10 to 20 '))
        if h==12:
              print('you are correct ')
              print('do want to go to level 3 ')
        else:
             print('you are wrong')
   except NameError:
        print('we are improving')
   except ValueError:
        print('tell me an integer')    
elif e=='no':
    print('thank you')
else:
    print('hey say yes(or) no ')
