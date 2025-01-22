x = prompt()

if (x % 2 == 0 && x % 3 == 0) {
    console.log('divisible by 2 and 3')
}
    

a= prompt('Enter a number 1')
b= prompt('Enter a number 2')
c= prompt('Enter a number 3')

if (a > b && a > c) {
    console.log('a is greater')
} else if (b > a && b > c) {
    console.log('b is greater')
}
else {
    console.log('c is greater')
}


total_working_days = Number(prompt('Enter total working days'))
total_absent_days = prompt('Enter total absent days')
total_present_days = total_working_days - total_absent_days
percentage = (total_present_days / total_working_days) * 100

if (percentage < 75) {
    console.log('You are not eligible for the exam')
}


salary = prompt('Enter your salary')
years_of_service = prompt('Enter your years of service')

if (years_of_service <= 5) {
    bonus = (5/100) * salary
    console.log('Bonus is ' + bonus+salary)
} else if (years_of_service > 5 && years_of_service <= 10) {
    bonus = (8/100) * salary
    console.log('Bonus is ' + bonus+salary)
}   else {
    bonus = (10/100) * salary
    console.log('Bonus is ' + bonus+salary)
}
