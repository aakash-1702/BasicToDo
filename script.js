

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addToDo(){
    if(inputBox.value === '') alert("Please type something");
    else{
        const newElement = document.createElement("li");
        newElement.textContent  = inputBox.value;
        listContainer.appendChild(newElement);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        newElement.appendChild(span);
    }
    inputBox.value = '';
    saveData()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

},false);



function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();