var marks = [1,2,3,4,5,6,7,8,9,10];
//console.log (numbers.reverse());
/*
array.filter(function(x){
    return condition;
})

array.map(function(x){
    return condition;
});
*/ 
var oddNumbers = marks.filter(function(item,index){
    console.log("element==>",item);
    console.log("index ==>",index);
    console.log("------------------")
  return item%2==1
});


console.log(oddNumbers)