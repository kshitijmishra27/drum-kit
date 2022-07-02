var size = document.querySelectorAll(".drum").length;

for(var i = 0; i<size; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        var change = this.innerHTML;

      makeSound(change);
      buttonAnimation(change);

    });

}

    document.addEventListener("keypress", function(event){

        var ans = event.key;

      makeSound(ans);
        buttonAnimation(ans);

    });


function makeSound(key){

    switch (key) {

        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
                
         case "a":
            var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
                
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;       
                
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

        case "j":
            var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;

        case "k":
            var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
    
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;

        default:  console.log(change);

    }

}

function buttonAnimation(currentKey){

  
  var p =  document.querySelector("." + currentKey);
  p.classList.add("pressed");

  setTimeout(function (){

    p.classList.remove("pressed");

  } , 100);


}


