//Custom error classes:

class ElementError extends Error{
    constructor(message:string){
        super(message);   //Super keyword is use to call parent class constructor.
            //constructor says to super class I will give you 'message' that I having it.
    }
}


class BrowserError extends Error{
    constructor(message:string){
        super(message);   //Super keyword is use to call parent class constructor.
            //constructor says to super class I will give you 'message' that I having it.
    }
}


class FrameworkError extends Error{
    constructor(message:string){
        super(message);   //Super keyword is use to call parent class constructor.
            //constructor says to super class I will give you 'message' that I having it.
    }
}


let browser='AmitBrowser';
switch (browser) {
    case 'chrome':
        console.log('Open chrome');
        break;

    default:
        console.log('Please pass the right browser name...');
        throw new BrowserError('====INVALID BROWSER==== '+ browser);  //***instead of custom class Error we can use normal Error class also here.
        //break;   //throw and break we cant use it together.
}

console.log('Enter the app URL');      //after condtion is wrong still this line will be print.
//for that we need to throw the error in default part to terminate the program.(Line 34)