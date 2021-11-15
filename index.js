//Globals
var x = document.getElementsByClassName("balloon"); //Target DOM.
var y = document.getElementById("yay-no-balloons") //finished game div
var playAgainBtn = document.querySelector(".play-again"); //play again button.
var arrayItem = [];
// var y = document.querySelectorAll("p") //Target or popped balloons.

//Iterate and add listener over all balloon div's
for (var i=0; i< x.length; i++) {
x[i].addEventListener("click", function() {

//Things to do when balloon is clicked.
this.insertAdjacentHTML("afterbegin",'<p class="count">' + '"Pop!"'); //inserts <p>Pop!</p> into clicked div.
this.style.backgroundColor="#ededed"; // changes background color to match body.
arrayItem.push(this.class); //adds an item to the array to use as a counter.
this.removeEventListener('click', arguments.callee);// removes the listener attached to the targeted element.

//conditional statement to identify if all balloons have been popped using arrayItem as a counter.
if (arrayItem.length == x.length) {
y.style.display="block";
document.getElementById("balloon-gallery").style.display="none";
playAgainBtn.style.display="block";
// y.insertAdjacentHTML("afterend", '<button>' +'Play Again');
}

})
}

//reset game.
function resetGame() {
  reload = location.reload();
}
//listener for reload
playAgainBtn.addEventListener("click", resetGame, false);






// What i have learned.
//removing listeners for the first time here, in this situation it was difficult
//because you need to identify the function within the removelistener parameters, however it was an anonymous function which cant be referenced to.
//so i also leanred about using the arguments.callee for the 2nd parameter of the listener.
//This can reference the anonymous function as long as it is inside the actual anonymous function but doesnt work in strict mode.

//Learned how to add a reset button that act as the browsers refresh page button using location.reload().
