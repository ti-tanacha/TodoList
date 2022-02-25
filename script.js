var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var listItem = document.querySelectorAll("li")
var listButton = document.querySelectorAll(".removeBtn")

forEachItem();
forEachBtn();

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");

	div.classList.add("div-wrapper");
	li.appendChild(document.createTextNode(input.value));

	//create remove button
	var removeBtn = document.createElement("button");
	removeBtn.appendChild(document.createTextNode("Delete"));
	removeBtn.classList.add("removeBtn");

	div.appendChild(li);
	div.appendChild(removeBtn);
	ul.appendChild(div);
	input.value = "";

	li.addEventListener("click", function(){
		li.classList.toggle("done");
	});

	removeBtn.addEventListener("click", function(){
		li.parentElement.remove();
	})


}

function createRemoveButton(){
	var removeBtn = document.createElement("button");

	removeBtn.appendChild(document.createTextNode("Delete"));
	
	return removeBtn;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		
	}
}

//for loop original li element in html file
function forEachItem(){
	listItem.forEach(item => {
		item.addEventListener("click", function(){
			item.classList.toggle("done");
		})
	})
}

//for loop original .removeBtn element in html file
function forEachBtn(){
	listButton.forEach(item => {
		item.addEventListener("click", function(){
			item.parentElement.remove();
		})
	})
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
