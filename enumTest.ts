//enum: its a collection of 'n' numbers constants in single variable/entity.

enum BROWSERS{     //general naming convention for enum in capital letter.
    CHROME='chrome',        //values are also should be capital letter.
    FIREFOX='firefox',
    EDGE='edge',
    SAFARI='safari'
}

console.log(BROWSERS.CHROME);  //0     //This result before assign value in small letters.
console.log(BROWSERS.FIREFOX); //1
console.log(BROWSERS.EDGE);    //2
console.log(BROWSERS.SAFARI);  //3


console.log(BROWSERS.CHROME);  //chrome     //This result after assign value in small letters.
console.log(BROWSERS.FIREFOX); //firefox
console.log(BROWSERS.EDGE);    //edge
console.log(BROWSERS.SAFARI);  //safari


//***Avdantage of enum***
//dont need to write hard coded browsers names in main logic.
//suppose tomorrow if we have 'n' numbers of browsers in application we can support there.
//we can define env names,device names etc.

enum ENVS{
    QA='qa',
    PROD='prod'
}

//can i use this enums in diff class
//Yes we can using export.

export{BROWSERS,ENVS};