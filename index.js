let allButtons = document.querySelectorAll(".set>button")
let audio = new Audio('./sounds/tom-1.mp3')
for(let i =0;i<allButtons.length;i++){
    allButtons[i].addEventListener("click",function (){
        // this.style.color="blue";       
        checkSound(this.innerHTML);
        buttonAnimation(this.innerHTML);

    })
    
}
document.addEventListener("keypress",function(event){
    checkSound(event.key);
    buttonAnimation(event.key);
})
function checkSound(key){

    if(key=="w"){
        new Audio('./sounds/crash.mp3').play();
    }
    else if(key=="a"){
        new Audio('./sounds/kick-bass.mp3').play();
    }
    else if(key=="s"){
        new Audio('./sounds/snare.mp3').play();
    }
    else if(key=="d"){
        new Audio('./sounds/tom-1.mp3').play();
    }
    else if(key=="j"){
        new Audio('./sounds/tom-2.mp3').play();
    }
    else if(key=="k"){
        new Audio('./sounds/tom-3.mp3').play();
    }
    else if(key=="l"){
        new Audio('./sounds/tom-4.mp3').play();
    }
}
function buttonAnimation(clickedButton){
    let clickedButtoninfo = document.querySelector("."+clickedButton);
    clickedButtoninfo.classList.add("pressed");
    setTimeout(function(){
        clickedButtoninfo.classList.remove("pressed");
    })
}