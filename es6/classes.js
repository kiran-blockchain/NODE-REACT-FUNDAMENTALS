class User {
    constructor(fname,lname){
        this.firstName=fname;
        this.lastName=lname;
    }
    firstName; 
    lastName;
    getFullName(){
        return this.firstName+this.lastName;
    }
}

class Student extends User{
    constructor(){
        super();
        this.username="John";
    }
  username="Ravi";
}

console.log(new Student());
