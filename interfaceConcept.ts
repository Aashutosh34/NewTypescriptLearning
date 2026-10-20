//Interface:- interface is always use to define prototype.(Prototype for Object and classes)
//cannot create the object of interface.
//Only method declaration : No method body. No business logic.


//**1. Interface with the objects: Interface will define the how exactly the structure of that perticular object. 
//what are the properties I can define in this perticular object;this will be decide by interface.


//create interface
interface User{    
name:string;
age:number;
salary?:number;
readonly companyName:string    //readonly means constact;No one can change the value of company.
coding():void;   //only method declaration allowed in interface.
calce():void;

}

//create object
//once we define the object immidiately it will gives error bcz name,age,companyName is missinng.
//from this object which we are creating.
//It means we restricting that, if any object which I am creating and type of 'u1' is 'User' interface type,
//then its mandatory to define name,age,campanyName. salary is optional.   
//whatever the properties we define in interface those properties should be define(mandatory) in respective object.
//means we are not creating the object of interface; we are defining the type as an interface(let u1:User) 

let u1:User={      
   name:'Amit',    
   age:31,                           
   companyName:'IBM',
   salary: 15,
   coding():void {
       console.log(`${this.name} is Automation Tester`);
   },
   calce():void{
console.log(`${this.salary} I am earning` );
   }

}



console.log(u1);
u1.coding();
u1.calce();

//n numbers object we can create using this interface


//can we have method in interface?
//Yes, We can have the method in interface but only method declaration is allowed.