//variables
let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let reset = document.querySelector("#reset")
let input = document.querySelector("#Gamelength")
let p1scoreDisplay = document.querySelector("#p1score");
let p2scoreDisplay = document.querySelector("#p2score");
let scoreDisplay = document.querySelector("#playerscore");
let container = document.querySelector("#informationdiv")
let scorep1=0;
let scorep2=0;

//functions
p1.addEventListener("click",()=>{  
    if(input.value!=0 && input.value >0){
        if(scorep1!==parseInt(input.value)){
            scorep1++;
            p1scoreDisplay.innerText=`${scorep1}`
            
        }
        if(scorep1 == input.value && scorep1 > scorep2){
            p1scoreDisplay.style.color="green";
            p2.disabled=true;
            p1.disabled=true;
            p2.style.backgroundColor ="rgb(91, 76, 255)";
            p1.style.backgroundColor="rgb(99, 255, 99)";
        }
    }
})
p2.addEventListener("click",()=>{
    if(input.value!=0  && input.value>0){

    
    if(scorep2!==parseInt(input.value)){
        scorep2++;
        p2scoreDisplay.innerText=`${scorep2}`
    }
    if(scorep2 == input.value && scorep2 > scorep1){
        p2scoreDisplay.style.color="green";
        p1.disabled=true;
        p2.disabled=true;
        p2.style.backgroundColor ="rgb(91, 76, 255)";
        p1.style.backgroundColor="rgb(99, 255, 99)";
    }
}
})
reset.addEventListener("click",()=>{
    p1.disabled=false;
    p2.disabled=false;
    scorep1=0;
    scorep2=0;
    input.value=null;
    p1scoreDisplay.innerText=`${scorep1}`;
    p2scoreDisplay.innerText=`${scorep2}`;
    p1scoreDisplay.style.color= "black";
    p2scoreDisplay.style.color= "black";
    scoreDisplay.style.color="black"
    p2.style.backgroundColor ="rgb(21, 0, 255)";
    p1.style.backgroundColor="rgb(0, 232, 0)";
})



