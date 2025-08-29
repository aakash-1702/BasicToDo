// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");
const inputElement = document.querySelector("#input-box");
const listElement = document.querySelector("#list-container");

// function addToDo() {
//   if (inputBox.value === "") alert("Please type something");
//   else {
//     const newElement = document.createElement("li");
//     newElement.textContent = inputBox.value;
//     listContainer.appendChild(newElement);
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     newElement.appendChild(span);
//   }
//   inputBox.value = "";
//   updateCounter();
//   saveData();
// }
function addToDo(){
    if(inputElement.value === '')alert('Enter something');
    else {
        const newElement = document.createElement("li");
        newElement.textContent = inputElement.value;        
        listElement.appendChild(newElement);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        newElement.appendChild(span);
    }
    inputElement.value = '';
    saveData();
    
    updateCounter();;
}

// listContainer.addEventListener(
//   "click",
//   function (e) {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("checked");
//       saveData();
//       updateCounter();
//     } else if (e.target.tagName === "SPAN") {
//       e.target.parentElement.remove();
//       saveData();
//       updateCounter();
//     }
//   },
//   false
// );


listElement.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        updateCounter();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        updateCounter();                
    }
},false)

function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
     localStorage.setItem("data",listElement.innerHTML);
}

function showList() {
//   listContainer.innerHTML = localStorage.getItem("data");
     listElement.innerHTML = localStorage.getItem("data");
}

showList();

// function updateCounter() {
//   const allElements = document.querySelectorAll("#list-container li");
//   const doneElements = document.querySelectorAll("#list-container li.checked");

//   const remaining = allElements.length - doneElements.length;
//   const finished = doneElements.length;

//   document.getElementById("finished").textContent = finished;
//   document.getElementById("remaining").textContent = remaining;
// }

function updateCounter(){
    const allElements = document.querySelectorAll("#list-container li");
    const allFinished = document.querySelectorAll("#list-container li.checked");

    const remaining = allElements.length-allFinished.length;
    const finished = allFinished.length;

    document.querySelector("#finished").innerHTML = finished;
    document.querySelector("#remaining").innerHTML= remaining;
}


function clearAllData() {
    if (confirm("Are you sure you want to clear all tasks? This cannot be undone.")) {
        listElement.innerHTML = '';
        localStorage.removeItem("data");
        updateCounter();
    }
}


    
