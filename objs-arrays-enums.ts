// const person: {
//   name: string;
//   age: number;
//   hobbies: string[],
//   role: [number, string]
// } = {
// // const person = {
//   name: "Kenneth", //string
//   age: 50, //number
//   hobbies: ['Sports', 'Cooking'], //array
//   role: [2, 'author'] //tuple
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

 const person = {
  name: "Kenneth", //string
  age: 50, //number
  hobbies: ['Sports', 'Cooking'], //array
  role:  Role.ADMIN//tuple
};

// person.role[1] = 'publisher';

let favoriteActivities: string[];
favoriteActivities = ['Hockey'];

console.log(person.name);

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
  //console.log(hobby.map());
}

if( person.role == Role.AUTHOR ){
  console.log('is author');
}else{
  console.log('The role is ' + Role[person.role]);
}