//access modifier:- it means upto what level we are/want giving access to our class,methods,variables etc.

//Public,Private,Protected :- Access Modifiers


class user{
    public testing():void{
        console.log('This is testing method');
    }

     private coding():void{
        console.log('This is testing method of coding');
    }

      protected management():void{
        console.log('This is testing method of management');
    }

    public doCoding():void{
        this.coding();       //to call currect class object,method we us this keyword.
    }
}      //class ends here.


class employee extends user{

    public working():void{
this.testing();    // use this keyword bcz want to access parent class property.
this.management();  //with subclass we can access public and protector methods.
this.doCoding();  
    }
}

//outside the class
let u1:user=new user();
u1.testing();  //only public method we can access here outside the class.



let emp:employee=new employee();
emp.working();   //outside the class we can access only public methods.


//So how to give the access of the private method to other classes or child class???
//Encapsulation concept we can use here.


//**In perticular class I have few public and few private properties.
//outside the class not possible to acsess private properties of class.
//we can use/call those private property via public layer.
//public method will call the internal private method and then private method/properties can access. 
