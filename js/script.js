let physics = document.querySelector(".physics");
let chemistry = document.querySelector(".chemistry");
let biology = document.querySelector(".biology");
let math = document.querySelector(".math");
let computer = document.querySelector(".computer");
let button = document.querySelector(".button");
let display = document.querySelector(".display");


button.addEventListener("click", function() {

 let fphysics = parseFloat(physics.value)
 let fchemistry = parseFloat(chemistry.value)
 let fbiology = parseFloat(biology.value)
 let fmath = parseFloat(math.value)
 let fcomputer = parseFloat(computer.value)

 if( fphysics <= 100 && fchemistry <=100 && fbiology <=100 && fmath <=100 && fcomputer <=100){
   
    let allNum = fphysics+fchemistry+fbiology+fmath+fcomputer;
    let allNumdiv = allNum/5.0;
    console.log(allNumdiv)
     
    if(allNumdiv >= 80){
        display.innerHTML = "You Got A+ "
    }else if(allNumdiv >=75){
        display.innerHTML = "You Got A "
    }else if(allNumdiv >=70){
        display.innerHTML = "You Got A-"
    }else if(allNumdiv >= 65){
        display.innerHTML = "You Got B+"
    }else if(allNumdiv >= 60){
        display.innerHTML = "You Got B"
    }else if(allNumdiv >=55){
        display.innerHTML = "You Got B-"
    }else if(allNumdiv >= 50){
        display.innerHTML = "You Got C+"
    }else if(allNumdiv >= 45){
        display.innerHTML = "You Got C"
    } else if(allNumdiv >=40){
        display.innerHTML = "You Got D"
    }else if(allNumdiv <40){
        display.innerHTML = "You Are Fail"
    }

 }else{
    console.log("please input valur under 100")
 }


  
  
  


 

})