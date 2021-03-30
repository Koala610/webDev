
ID = 0;

//var fs = require("fs");
var activeTab = document.getElementById("inProgressTab");
var doneTab = document.getElementById("doneTab");



function createTask(){


	let text = document.getElementById("taskText");
	//let delButton = "<button onclick='deleteTask(" +ID +")'" +"class='delButton'> X </button>";

	//let newBlock = "<div ID = 'taskLine" +ID+"' class = 'taskLines'>" + "\n" +"\t" + newTask + newLabel + delButton + "\n"  +"</div>";
	//let newTask = '<input type="checkbox" ID="task' + ID+'"' +" onclick = 'finishTask("+ID+")'>" +"</input>";

	let checkText = text.value.replace(" ","");
	if(checkText == ""){
		alert("Pleasa write details of task!");
	}else{
		let newTask = document.createElement("INPUT");
		newTask.id = "task"+ID;
		newTask.type = "checkbox";


		let newLabel = document.createElement('LABEL');
		newLabel.innerHTML = text.value;

		let delButton = document.createElement("BUTTON");
		delButton.className = "delButton";
		delButton.innerHTML = "X";



		let newBlock = document.createElement("DIV");
		newBlock.appendChild(newTask);
		newBlock.appendChild(newLabel);
		newBlock.appendChild(delButton);
		newBlock.className = "taskLines";
		newBlock.id = "taskLine"+ID;



		//console.log(newBlock.innerHTML);





		delButton.addEventListener("click", () =>{
			newBlock.parentNode.removeChild(newBlock);
		},true);


		newTask.addEventListener("click", () =>{
			if(newTask.checked){
				//task.parentNode.style.setProperty("text-decoration", "line-through");

				newBlock.style.textDecoration = 'line-through';
				newBlock.parentNode.removeChild(newBlock);
				doneTab.appendChild(newBlock);


			}else{
				newBlock.style.textDecoration = 'none';
				newBlock.parentNode.removeChild(newBlock);
				activeTab.appendChild(newBlock);
			}

		},true);

		ID++;

		let empText = document.getElementById("eT1");
		if(empText.style.display != "none"){
			empText.style.display = "none";
		}
		document.getElementById('inProgressTab').appendChild(newBlock);
		document.getElementById("taskText").value ="";
	}


}


document.getElementById("taskText").addEventListener("keydown", (event) =>{
	if(event.keyCode == 13){
		createTask();
	}

}, true)


function serialize(){
	let serBlock = document.getElementById("toDoList");
	let serInfo = serBlock.innerHTML;
	let serObj = {
		"html":serInfo,
		"ID":ID
	}

	let serSmth = JSON.stringify(serObj);
	//fs.writeFile('output.txt',serSmth);

}



function showActiveTab(){
	let actButton = document.getElementById("tab1");
	let doneButton = document.getElementById("tab2");

	activeTab.style.display = 'initial';
	actButton.style.background = "gray";
	doneButton.style.background = "#C9C8C8";
	doneTab.style.display = 'none';

}

function showDoneTab(){
	let actButton = document.getElementById("tab1");
	let doneButton = document.getElementById("tab2");
	actButton.style.background = "#C9C8C8";
	doneButton.style.background = "gray";
	doneTab.style.display = 'initial';
	activeTab.style.display = 'none';

}
