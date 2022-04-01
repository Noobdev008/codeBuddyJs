// level {1/2/3}




// -------------level 2---------

// 1. Write a function to remove all even numbers from an Array.

// Input array: 
// [1, 3, 4, 6, 7, 8]  
// output - [1,3,7]



let arr = [1,4,2,7,2,9,11,17,20]    // 1,7,9,11,17
function removeAllEvenNumbers(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            newArr.push(arr[i])
        }
    }
    console.log("Odd Number-: "+ newArr)
}

// removeAllEvenNumbers(arr)


// 2. Replace all the vowels in a string with uppercase vowels.
// ```
// Input string: 'Elie'
// ```
// ```
// Output should be string: 'ElIE'


let str = "Elie"

function vowelToUpperCase(str){
    let res =""
    for(let i = 0; i < str.length; i++){
        if(str[i]=="a" ||
         str[i]=="e" ||
         str[i]=="i" ||
         str[i]=="o" ||
         str[i]=="u" ){
         
          res += str[i].toUpperCase();  
        }else{
            res +=str[i];
        }
    }
    console.log(res)
}
// vowelToUpperCase(str)


// 3. Write a function to find the maximum number in an array.

// Input array: [1, 3, 4, 6, 7, 8, 2, 5]


// Output should be a number: 8



let array = [1, 3, 4, 6, 7, 8, 2, 5]

function findMax(array){
    let max = array[0];
    for(let i = 1; i <array.length; i++){
        if(array[i]>max){
            max= array[i];
        }
    }
    console.log(max)
}

findMax(array)


// let array = [1, 3, 4, 6, 7, 8, 2, 5]

// let max = Math.max(...array);
// console.log(max)

// above code -: This is a another method to find max number

