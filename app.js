const colors = ["#b76b98","#656a8c" ,"#9b2f3b","rgb(54 43 41)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click" , function () {
	const random= getRandomNumber();
document.body.style.backgroundColor = colors[random];
//console.log(getRandomNumber());
  color.textContent = colors[random];

} );
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}