//Inheritance


class Car{

    start(){
        console.log('Car start..');
    }

    stop(){
        console.log('Car stop..');
    }

    refuel(){
        console.log('Car refuel..');
    }
}

class BMW extends Car{

    override start(){                //override:- This method is provided by Typesccript.
        console.log('BMW start');
    }

      autoPartking(){
        console.log('BMW auto parking');
    }

}

// let bmw:BMW=new BMW();   //new BMW()= object    bmw=reference variable(which is in Stack memory)
// bmw.start();
// bmw.stop();
// bmw.refuel();
// bmw.autoPartking();


// let car:Car=new Car();
// car.start();
// car.stop();
// car.refuel(); 

//*** Parent cant take any method Or any other data from child.

// ***Top/Up casting
//*** Child class object can be referred by parent class reference variable.***
//In type casting we can access only overridden and  inherited method.
//Individual method we cannot access.
let c1:Car=new BMW(); 
 c1.start();   //Overriden in BMW class.
 c1.stop();    //Inherited from parent class(Car)
 c1.refuel();  //Inherited from parent class(Car)
//  c1. autoPartking();   //sperate method of BMW class(child  class). anyhow its not related to 'Car' class. so not allowed.
//line 49 means every BMW is a car.That we can say.



//down casting: 
//parent class object can be refered by child class reference variable.
//let c2:BMW=new Car();   // down casting is not allowed. showing error in this line.
// Here line 60 meaning every car is a BMW. We cannot say this.