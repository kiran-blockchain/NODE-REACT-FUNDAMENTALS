//Parameters to the promise constructor?
var condition = 'positive'
var promise = new Promise(function(resolve,reject){
  if(condition=='positive'){
    resolve("I am good");
  }
  else{
    reject("Ooops!!!!")
  }
});

promise.then(function(response){
    console.log(response);
})
.catch(function(errorResponse){
    console.log(errorResponse);
});