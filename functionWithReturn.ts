function browser(name:string):boolean{
    switch(name.toLowerCase().trim()){
        case 'chrome':
            console.log('Chrome is launched');
            return true;
         // break;                 //cannot use return and break together.
        case 'Edge':
            console.log('Edge is launched')
            return true
         // break;
        default:
            console.log('invalid browser');
            return false;
        //  break;
    }
};


let islaunch=browser('chrome');
console.log(islaunch);




//**** Function with Promises

function getNumber():Promise<number>{
    return Promise.resolve(100);    //here "return Promise.resolve(100)" return to getNumber().
};                             //Therefore we set the type as Promise<number>

getNumber().then((result)=>{   
    console.log(result);
});


console.log("------------------------------------------------------------------------");


function getTrainerName():Promise<string>{
    return Promise.resolve("Naveen");   //here "return Promise.resolve(100)" return to getNumber().
};                             //Therefore we set the type as Promise<number>

getTrainerName().then((trName)=>{   
    console.log(trName);
});



console.log("------------------------------------------------------------------------");

type userType={name:string,age:number};

//function getUserData():Promise<{name:string,age:number}>{      Or we can use below line also.
function getUserData():Promise<userType>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let user={
            name:'Amit',
            age:31
          }
          resolve(user);
        },3000);
    });
};


// getUserData().then((myUser)=>{       //***** With then/catch we follow this
//     console.log(myUser);
// })


async function getMyUserData(){     // ****** With async we are following this.
   let userData=await getUserData();  //better to follow async.
   console.log(userData);
};

getMyUserData();



console.log("------------------------------------------------------------------------");



//Replicate the scenario like playwright

function click(element:string):Promise<void>{     //Element = xpath,locator,getBy etc.
console.log('click on',element);   //Promise<void> bcz resolve() inside is blank.
return Promise.resolve();
}


//Generic until/function:
async function doClick(element:string){
    await click(element);
}