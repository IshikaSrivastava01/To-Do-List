/*Retreives input element from input-box and stores it in input box*/
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/*It adds new task to the list*/
function addTask(){
	if(inputBox.value.trim() === ''){
		alert("You must write something!");
	}
	else{
		let li = document.createElement("li");
		li.textContent = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.textContent = "\u00d7";
		li.appendChild(span);
	}
	/*Clears the value of input box after adding each task*/
	inputBox.value = "";
	saveData();
}

listContainer.addEventListener("click",function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData();
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
},false);


function saveData(){
	localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
	listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); // Load saved tasks on page load
