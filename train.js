// function abc(){
//     console.log(abc.xyz)
// }

// abc()
// abc.xyz= 400
// abc()


// const numbers=[1,2,3,4]
// numbers[100] = 500
// console.log(numbers)

// console.log(typeof typeof 100)

// const arr = [...'hello']
// console.log(arr)


// console.log(parseInt('10+2'))
// console.log(parseInt('7FM'))
// console.log(parseInt('M7F'))

// console.log([1,2].map(num=>{
//     if(num>0) return
//     return num*2
// }))


// {
//     function abc(){
//         console.log('abc')
//     }
// }

// abc()


// function abc(a,b){
//     'use strict'
//      a = 100
//      b = 200
//     return arguments[0]+ arguments[1]
//     console.log(a+b)
// }

// console.log(abc(10,20))


const arr = [1,2,3,4,5,6,7,8]
const newArr = arr.find((num)=>{
    return num>4
}    
)

console.log(newArr)

const newArr1 = arr.filter((num)=>{
    return num>4
}
)

console.log(newArr1)

const newArr2 = arr.map((num)=>{
    return num>4
}
)

console.log(newArr2)
