class Cars
{
    name;
    picture;
    description;

    constructor(n,p,d)
    {
        this.name=n;
        this.picture=p;
        this.description=d;
    }
};

function main()
{
    const h1 = document.querySelector("#cartext");
    const image = document.querySelector("#carimage");
    const carArr = [];
    let index=1; 
    const time=1000;//1sec
    
    carArr.push(new Cars("Aston Martin","Aston.jpg","picture of Aston Martin")); 
    carArr.push(new Cars("Bentley","Bentley.jpg","A picture of Bentley"));
    carArr.push(new Cars("BMW i8","i8.jpg","A picture of BMW i8")); 
    carArr.push(new Cars("Lamborgini","Lambo.jpg","A picture of Lamborgini"));
    carArr.push(new Cars("RR Phantom","Phantom.jpg","A picture of Rolls Royce Phantom"));
    carArr.push(new Cars("R8","R8.jpg","A picture of Audi R8"));
    carArr.push(new Cars("WRX STI","Wrx.jpg","A picture of Subaru WRX Sti")); 

    //----------------------------------------------------------------------//
    setTimeout(right,time);

    //----------------------------------------------------------------------//
    // ---- EVENT LISTENERS ---//
    
    const leftButton = document.querySelector("#buttonLEFT");   
    leftButton.addEventListener("click", left);

    const buttonRight = document.querySelector("#buttonRight");   
    buttonRight.addEventListener("click", right);

    //----------------------------------------------------------------------//   
    // ---- Functions ---//
    let interValRef;
    let whichButtonIsPressed=null;

    function left()
    {
        whichButtonIsPressed="left";// reassigns 

        if(whichButtonIsPressed=="left")
        {    
            clearInterval(interValRef)
        }

        whichButtonIsPressed=null;
        
        interValRef= setInterval(function(){
        image.src=`img/${carArr[index].picture}`; 
        image.alt=carArr[index].description;
        h1.innerHTML=carArr[index].name;

        index--;

        if(index<0)
        {
            index=(carArr.length-1);
        }
      
        console.log(index + `Left`)
        }, time);
    };

    function right()
    {   

        whichButtonIsPressed="right";


        if(whichButtonIsPressed=="right")
        {    
            clearInterval(interValRef)

        }

        whichButtonIsPressed=null;
        
        interValRef = setInterval(function (){  
        image.src = `img/${carArr[index].picture}`; 
        image.alt=carArr[index].description;
        h1.innerHTML=carArr[index].name;
        
        index++;

        if(index == carArr.length)
        {
            index=0;
        }

        console.log(index + `Right`)
        }, time);
    };

    //----------------------------------------------------------------------//
};
main();


