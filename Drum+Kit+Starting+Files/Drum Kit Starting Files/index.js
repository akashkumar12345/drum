// Add event listeners for drum buttons and keypresses
var drumButtons = document.querySelectorAll(".drum");
var docLength = drumButtons.length;

// Function to play sound based on key
function playSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("Invalid key: " + key);
    }
}

// Add event listeners to drum buttons for clicks
// for (var i = 0; i < docLength; i++) {
//     drumButtons[i].addEventListener("click", function () {
//         var buttonInnerHTML = this.innerHTML;
//         playSound(buttonInnerHTML);
//     });
// }


// Add event listener for keydown events
document.addEventListener("keydown", function(event) {
    // console.log("event here",event);
    playSound(event.key);
});
