x = int(input("Enter a number: "))

if x % 2 == 0 and x % 3 == 0:
    print('divisible by 2 and 3')

a = int(input('Enter a number 1: '))
b = int(input('Enter a number 2: '))
c = int(input('Enter a number 3: '))

if a > b and a > c:
    print('a is greater')
elif b > a and b > c:
    print('b is greater')
else:
    print('c is greater')

total_working_days = int(input('Enter total working days: '))
total_absent_days = int(input('Enter total absent days: '))
total_present_days = total_working_days - total_absent_days

percentage = (total_present_days / total_working_days) * 100

if percentage < 75:
    print('You are not eligible for the exam')


salary = int(input('Enter your salary: '))
years_of_service = int(input('Enter years of service: '))

if years_of_service <= 5:
    bonus = (5 / 100) * salary
    print('Bonus:', bonus +salary)
elif years_of_service <= 10:
    bonus = (8/100) * salary
    print(bonus +salary)
else:
    bonus = (10/100) * salary
    print(bonus+salary)
    
