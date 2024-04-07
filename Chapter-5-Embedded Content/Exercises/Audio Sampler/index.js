//Js is a headache >:(
//start of js code
//pt. 1 soundboard
//makes sure that js is exc after html loads
document.addEventListener("DOMContentLoaded", function() {
    const soundboard = document.querySelectorAll(".sbox");
    //iterates on button
    soundboard.forEach(function(button) {
        //selects all audios w/ sba class
        const sbsound = button.querySelector(".sba");
        //click event for the buttons
        button.addEventListener("click", function() {
            if (sbsound.paused) { //if paused, then it'll play
                sbsound.play();
            } else { //else, reset to 0
                sbsound.pause();
                sbsound.currentTime = 0;
            }
        });
    });


//I hate js >:(
//pt.2 text to speech
//assigns a new speechsyn to tspeech(textspeech)
let tspeech = new SpeechSynthesisUtterance();

    //button addeventlistener
    document.querySelector("button").addEventListener("click", () =>{
        tspeech.text = document.querySelector("textarea").value;//input text
        window.speechSynthesis.speak(tspeech)//speaking
    })
});
//THE END >:( after many sufferings