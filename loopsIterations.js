// // level {1/2/3}


// Normalize the following object to an array of objects.

// **Input:**


// {
//   liked: [
//     { id: 1, name: "John Doe", age: 20 },
//     { id: 2, name: "Jane Doe", age: 30 },
//     { id: 3, name: "John Smith", age: 40 }
//   ],
//   disliked: [
//     { id: 4, name: "Jason Doe", age: 20 },
//     { id: 5, name: "Josh Doe", age: 30 },
//     { id: 6, name: "Karen Smith", age: 40 }
//   ],
//   loved: [
//     { id: 7, name: "Jasmine Doe", age: 20 },
//     { id: 8, name: "Bob Doe", age: 30 },
//     { id: 9, name: "Tom Smith", age: 40 }
//   ]
// }


// **Output:**


// [
//   { id: 1, name: "John Doe", age: 20, reaction: 'liked' },
//   { id: 2, name: "Jane Doe", age: 30, reaction: 'liked' },
//   { id: 3, name: "John Smith", age: 40, reaction: 'liked' },
//   { id: 4, name: "Jason Doe", age: 20, reaction: 'disliked' },
//   { id: 5, name: "Josh Doe", age: 30, reaction: 'disliked' },
//   { id: 6, name: "Karen Smith", age: 40, reaction: 'disliked' },
//   { id: 7, name: "Jasmine Doe", age: 20, reaction: 'loved' },
//   { id: 8, name: "Bob Doe", age: 30, reaction: 'loved' },
//   { id: 9, name: "Tom Smith", age: 40, reaction: 'loved' }
// ]

// ------------ Level 3------------


const obj ={
      liked: [
        { id: 1, name: "John Doe", age: 20 },
        { id: 2, name: "Jane Doe", age: 30 },
        { id: 3, name: "John Smith", age: 40 }
      ],
      disliked: [
        { id: 4, name: "Jason Doe", age: 20 },
        { id: 5, name: "Josh Doe", age: 30 },
        { id: 6, name: "Karen Smith", age: 40 }
      ],
      loved: [
        { id: 7, name: "Jasmine Doe", age: 20 },
        { id: 8, name: "Bob Doe", age: 30 },
        { id: 9, name: "Tom Smith", age: 40 }
      ]
}
const newObj =(obj)=>{                  
   const liked =obj.liked;
   const disliked = obj.disliked;
   const loved = obj.loved;

   let likedObj;
   let dislikedObj;
   let lovedObj;
  // here using map method 
   if(liked){
       likedObj =liked.map((li)=>{
           return{
             ...li,                   // using rest operator which take all the value of li
             reaction : 'liked'
           }
       })
   }

   if(disliked){
    dislikedObj = disliked.map((li)=>{
        return{
            ...li,
            reaction : 'disliked'
        }
    })
   }

   if(loved){
    lovedObj = loved.map((li)=>{
        return{
            ...li,
            reaction : 'loved'
        }
    })
   }

   const concated = [...likedObj, ...dislikedObj, ...lovedObj]
   
   return concated

}

console.log(newObj(obj))