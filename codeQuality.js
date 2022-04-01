// level {1/2/3}



// Re-write the below code to better code quality standards.
// Hint: use modern ES6 syntax and reduce lines of code.

// async function getUsers(users) {
//   const new_users = [];

//   for (let i = 0; i < users.length; i = i + 1) {
//     const newUser = user[i];
//     newUser.id = i;

//     new_users.push(newUser);
//   }

//   return new_users;
// }


// ------- Level 3---------


const getUsers = async (users)=>{
    return users.map((user,index)=>{
        return{
        ...user,
        id: index
        }
    });
}





