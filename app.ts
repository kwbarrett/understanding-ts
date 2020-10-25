// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Kenneth",
  age: 50,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Hockey'];

console.log(person.name);

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
  //console.log(hobby.map());
}