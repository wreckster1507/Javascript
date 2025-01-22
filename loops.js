for (let i = 10 ; i <= 15 ; i++) {
    console.log(i)
}

// explain the above code snippet
//  The above code snippet is a for loop that starts from 10 and goes up to 15. 
// The loop runs 6 times and prints the value of i each time. The output of the code snippet is:
// 10


for (let i = 2; i<=9; i = i+2){
    console.log(i)
}

// explain the above code snippet
// The above code snippet is a for loop that starts from 2 and goes up to 9.
// The loop runs 4 times and prints the value of i each time. The output of the code snippet is:
// 2
// 4




for (let i = 1; i<=5; i++){
    console.log("Sarthak")
}   


// The above code snippet is a for loop that starts from 1 and goes up to 5.
// The loop runs 5 times and prints the string "Sarthak" each time. The output of the code snippet is:
// Sarthak
// Sarthak
// Sarthak
// Sarthak
// Sarthak


//print 10 table 

for (let i = 1; i<=10; i++){
    console.log(`10 * ${i} = ${10*i}`)
}

// The above code snippet is a for loop that starts from 1 and goes up to 10.
// The loop runs 10 times and prints the 10 table each time. The output of the code snippet is:

// take an array of 5 elements and print the elements of the array using for loop

const arr = [1,2,3,4,5]

for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}



const v = 'hello'

for (let i in v){
    console.log([i])
}

// The above code snippet is a for loop that iterates over the string "hello".
// The loop runs 5 times and prints the index of each character in the string. The output of the code snippet is:



let i = 2 
n = 8
while (i <= n){
    console.log(i+1)
    i=i+2
}

// The above code snippet is a while loop that starts from 2 and goes up to 8.
// The loop runs 4 times and prints the value of i+1 each time. The output of the code snippet is:
// 3
// 5
// 7
// 9


for (let i= 2; i<=8;i=i+2){
    if(i>4){
        break;
    }
    console.log(i+1)
}


// The above code snippet is a for loop that starts from 2 and goes up to 8.
// The loop runs 4 times and prints the value of i+1 each time. The output of the code snippet is:
// 3
// 5
// 7
// 9






