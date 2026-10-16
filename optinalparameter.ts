//optional parameter is not available in javascript.
//Some time I really want to supply value to that parameter and sometines its not needed.
// so we will make it optional with '?'.

function print(name:string,age?:number):void{
console.log(name);
console.log(age);
};

print('Kaivalya');    // if we run this and age is not calling here,it will show undefined.
print('Kaivalya',2);

function launchBrowser(browser:string,headless?:boolean):boolean{  //now its mandatory to return boolean from this function.
if(headless){
    console.log('Run the test cases in',browser,'in headless mode:',headless);
    return true;
}
else{
    console.log('Run test cases in normal mode with: ',browser);
    return true;    
}
};

launchBrowser('chrome');

console.log("-------------------------------------------------------------------");

function search(name:string,color:string,price?:number,seller?:string):void{
if(price && seller){
console.log('Performing the search:',name,color,price,seller);
}
else{
    console.log('Performing the search: ',name,color);
}

};

search('macbook Pro','White',80000, 'iPlanet pvt ltd');  //it will go on if loop.
search('macbook Pro','White'); // use any one out of these 2.

//This is not function overlaoding.
//function overloading will be define at the design time. not at the calling time.
//It means this is not function overloading.


//******Function overloading.******
//different function with same name but different parameters.
//not like java.


//Function overloading available in the form of Prototype signature overloading.
//design a prototype: Proto + Type  
//Below one is Signature function:
function combination(a:number,b:number):number;
function combination(a:string,b:number):string;   //becz string + number = string


//****Only one time we can deifne the function with body. Next time if we try function with body with same name; it will show error.
function combination(a:any,b:any):any{
    return a+b;
}


//Calling Signaturing
console.log(combination(100,200));   //300
console.log(combination('Amit',100));  //Amit100

//console.log(combination('Amit','Nikhikl'));  //This is not allowed because we mentioned only 2 combinations above. 
//based on the combination here it will show the suggession how much combination are allowed.


//****Prototype means defining the type of the function.


