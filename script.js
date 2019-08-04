var enter_button = document.getElementById("enter_button");
var remove_button = document.getElementById("remove_button");
var enter = document.getElementById("enter");
var remove = document.getElementById("remove");
var ul = document.querySelector("ul");
var list = document.getElementById("list");

function inputvalue() {
	return enter.value.length ;
}

function addelement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(enter.value));
	ul.appendChild(li);
	enter.value = "";}

enter_button.addEventListener("click", function (){
	if (inputvalue() > 0)
	addelement();
})

enter.addEventListener("keypress", function (event){
	if (inputvalue() > 0 && event.keyCode === 13)
	addelement();
})

var ul_le = document.getElementById("list").childNodes.length; 
for (var i = ul_le - 1; i >= 0; i=i-2) {
	list.removeChild(list.childNodes[i]);
}
function remove_element(){
	var ul_len = document.getElementById("list").childNodes.length; 
	for (var i = ul_len - 1; i >= 0; i--) {
		if(list.childNodes[i].innerText === remove.value ){
			list.removeChild(list.childNodes[i]);
			remove.value = "";
		}
	}
}
remove_button.addEventListener("click", function () {
	if(remove.value.length > 0){
		remove_element();
	}
})

remove.addEventListener("keypress", function (event) {
	if(remove.value.length > 0 && event.keyCode === 13){
		remove_element();
	}
})

