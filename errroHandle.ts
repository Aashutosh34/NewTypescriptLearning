//Error Or Exceptions : Will create Error class which is already available in JS/TS.

//Error means any unwanted situation which is coming because of my code.
//Handle that error using try-catch block/finally.
//And If we dont want to handle that error, then we have to use throw keyword to throw the error.

//If condition is not matching, that time I want to throw error. Instead of handling error.
//It will terminate the program.

//handle the error in that situation only when error is not that much important.


function division(a:number,b:number):number{
    if(b===0){
throw new Error('Any number cannot be divided by 0');
    }
    return a/b;       //but b is suppose any number.
}

let r1=division(10,5);
console.log(r1);


console.log('-------------------------------------------------------------');

//Parsing:- It says we will convert some JSON to javascript object.

function parsing(){
    try{       //Our error code should be add in try block.
   let result= JSON.parse('Hi json');      //Intentionallyt put wrong JSON, Its a normal string.
   console.log(result);
    }
    catch(err){     //catch block will catch the error thrown by try block code line (30)
                    // add any variable in catch block like I added 'err'.
        console.log(err);  //whatever the error comes from line 30 it will be catch here and print.
    }

}

parsing();
console.log('Print this after got the error also');  


//throw keyword we are using when intensionally we need to throw the exception.
//We can write 'try' block without 'catch' block also.(but for that need to write 'finally' block)
//finally: doesn't matter exception is coming or not , It will always go inside the finally block. 

function parsing001(){
    try{       //Our error code should be add in try block.
   let result001= JSON.parse('Hi json');      //Intentionallyt put wrong JSON, Its a normal string.
   console.log(result001);
    }
    catch(error){
        console.log(error);   
    }
  finally{
console.log('close the connection.');     
  }

}

parsing001();
console.log('Print after got the error also');

//we cannot write 'catch' block without 'try' block.
//without catch block we cannot handle exception even if finally block is mentioned.
//so write try,catch and finally together.
//finally: use of this block is closing the resources.
//even if condition is true/false finally block will always execute to close the connection.




function parsing002(){
    try{       //Our error code should be add in try block.
   let result002= JSON.parse('{"Name":"Amit"}');      //Intentionallyt put wrong JSON, Its a normal string.
   console.log(result002);   //It will execute the finally block also even if the condition is true.
    }
    catch(error){
        console.log(error);   
    }
  finally{
console.log('close the connection.');     
  }

}

parsing002();
console.log('Print after got the error also');


console.log('------------------------------------------------------------');

function m1():never{
    throw new Error("Error message");  //new is used here to create an object of Error class. 
    //Error class is provided by the Playwright.
}

m1();

//Never: This keyword identifying this method will never return anything other than error.