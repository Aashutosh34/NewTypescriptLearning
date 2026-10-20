interface USMediacal{
    physio():void;
    cardio():void;
}

interface UKMediacal{
    ENT():void;
    oncology():void;
    emergency():void;
}

interface IndiaMediacal{
    pedia():void;
    dental():void;
    emergency():void;
}


class FortisHospital implements USMediacal,UKMediacal,IndiaMediacal{
    emergency(): void {            //This is common method.
        console.log("Emergency Services");
    }
    physio(): void {        
        console.log('FH----physio');    
    }
    cardio(): void {                    
        console.log('FH----cardio');
    }
    ENT(): void {
        console.log('FH----ENT');
    }
    oncology(): void {
        console.log('FH----oncology');
    }
    pedia(): void {
        console.log('FH----pedia');
    }
    dental(): void {
        console.log('FH----dental');
    }

    FortisOwnMedicalTest():void{
        console.log('FH----Own Medical Test');     //This is fortis hospital own method.
    }
    
}



//let USMed=new USMediacal();   //Interface object we cannot create.


let Fh:FortisHospital=new FortisHospital();
Fh.cardio();
Fh.emergency();