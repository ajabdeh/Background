var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

function setGradient(){
	body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

































//Create A List, Add & Delete Elements

// var button=document.getElementById("button");
// var reset=document.getElementById("reset");
// var input=document.getElementById("input");
// var ol=document.querySelector("ol");

// button.addEventListener("click",function(){
// 	if(input.value!=""){
// 		add();
// 	}
// });

// input.addEventListener("keypress",function(event){
// 	if(input.value!="" && event.keyCode==13){
// 		add();
// 	}
// });

// function add(){
// 	var li=document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ol.appendChild(li);
// 	input.value="";

// 	var button=document.createElement("button");
// 	button.appendChild(document.createTextNode("Delete"));
// 	li.appendChild(button);
// 	button.onclick=removeParent;
// }

// function removeParent(evt){
// 	evt.target.parentNode.remove();
// }

// reset.addEventListener("click",function(){
// 	input.value="";
// });