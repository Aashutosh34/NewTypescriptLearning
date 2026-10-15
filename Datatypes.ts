let num1: number = 100;
console.log(num1);


let str: string = 'Amit Kundalkar';
console.log(str);

let user = null;
let x: undefined = undefined;


//bigInt
let distance: bigint = 100n;
console.log(distance + 10n);


//any means any type value we can add but if we add with same variable the latest value will be display.
let testvalue: any;
testvalue = 100;
testvalue = 'Ak47';
testvalue = true;
console.log(testvalue);
console.log(typeof testvalue)


//1.Primitive datatypes

//let varName:type=value;

let num:number=100;
console.log(num);
console.log(typeof num);

//num='Amit';   //error becz we already mentioned type above.


let isActive:boolean=true;
console.log(isActive);
isActive=false;
console.log(isActive);


//unknown: like any we can use any type of data.
let value:unknown='hello';


//void:- it is use for function; it means no return.
//if perticualr function written with void it means it will never return anything.

function testing():void{
    console.log("Hello Testing");
};

testing();

function getMarks(StuName:string):void{
    console.log(StuName,100);
};

getMarks('Amit');  //if we pass getMarks(200); it will show error bcz only string allow for StuName.


//never: A value which will never occur/never happen.
//it will does not returning anything. It means the function returns something which is never occur.
//throwElement say give me some locator.
//locator: means xpath/css.
//suppose i am passing some id,name of that locator, passing text of that button passing.
//So locator:string we written here.
//Means never found this element based on this locator.

// function throwElement(locator:string):never{
// throw new Error(locator+"Is not found error");   //the error message want to supply.
// }


// throwElement('loginBtn');



//infinite loop:- never return anything;getting stuck in loop.
//there is no break,exit condition.

// function throwEnvNotFoundError(envName:string):never{
// throw new Error("Invalid ENV:"+envName);   //the error message want to supply.
// }

// throwEnvNotFoundError('uat');



//****because of throwing error in above code; while typing next code comment previous throwing error code then only next code will be visible.

//Union Types
//It means I can assign mulitple types to single variables.

let id: string|number;
id=12345;
id="12345";
console.log(id);  //typeof will give as per the latest value.



//arrays:

let marks:number[]=[40,50,60,70];
console.log(marks);
console.log(marks.length);


let empNames:string[]=['Amit','Automation Test Engineer','Lonand'];
console.log(empNames);

//one more to declare array
let eNames:Array<string>=["Amit","Kaivalya"];
let salary:Array<number|string>=[1200000,6000000,"ABC","XYZ"];



//Tuple: fixed length array with specific types:

let user1:[string,number]=["Amit",1600000]; 

let user2:[string,string,number]=["Amit","Automation Test Engineer",6595];

//type: 'tsc' to compile----> check dist folder.




//****Object:
//In the object seequence is flexible; Its not mandatory to set the value in sequence.

// let newUser={
//     name:"Amit",
//     salary:1600000,
//     address:'Lonand',
//     isActive:true
// };


//*****Custom type for the object: using type alias*******

type userType={name:string ; salary:number; address:string; isActive:boolean};


let newUser:userType={
   name:"Amit",
   salary:1600000,
   address:'Lonand',     
   isActive:true
};

console.log(newUser);

console.log("-------------------------------------------------------------");


type userType2={readonly name:string ; salary:number; address:string; isActive:boolean};
//readonly means if someone will try to change the value of name then it will be not acceptable.
//It will show error while trying change.


let newUser2:userType2={
   name:"Amit",
   salary:1600000,
   address:'Lonand',     
   isActive:true
};

console.log(newUser2);
//newUser2.name="Nikhil";    //Showing error becz above we assign name as readonly so can't change the value of name.
//*******readonly is only applicable object and class variable.********


console.log('----------------------------------------------------------------');

type orderIDType = string|number;
let ordetID:orderIDType=1234;
ordetID="Nike Shoe";
