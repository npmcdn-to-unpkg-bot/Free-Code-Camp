/*

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

*/



var Person = function(firstAndLast){

    this.setFullName = function(firstAndLast){
    var strSplits = firstAndLast.split(' ');
    Person.prototype.first = strSplits[0];
    Person.prototype.last = strSplits[1];
    };

    this.setFirstName = function(newFirst){
    Person.prototype.first = newFirst;
    };

    this.setLastName = function(last){
    Person.prototype.last = last;
    };

	this.setFullName(firstAndLast);
	
    this.getFirstName = function(){
        return Person.prototype.first;
    };

    this.getLastName = function(){
        return Person.prototype.last;
    };

    this.getFullName = function(){

        return Person.prototype.first + " " + Person.prototype.last;
    };

    

};
 // console.log(name);
  //console.log(firstName);
  //console.log(lastName);
   
   
};

var bob = new Person('Bob Ross');
//
bob.getFullName();

var joe = new Person('joe chimienti');
//
joe.getFullName();



