var users = [
    {
    name: "kiran",
    age: 30
}, 
{ name: "ravi", 
age: 20 }];

var ages = users.map(function(item,index){
    return {
        x:item.age
    }
});
console.log(ages);