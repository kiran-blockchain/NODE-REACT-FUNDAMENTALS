var users = [
    {
    name: "kiran",
    age: 30
}, 
{ name: "ravi", 
age: 20 }];

console.log(users[0]);
console.log(users[1]);
var filteredData = users.filter(function(item,index){
  return index;
});
console.log(filteredData)