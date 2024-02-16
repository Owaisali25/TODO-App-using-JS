var fetchInp = document.getElementById("inp");
var spaceForPara = document.getElementById("spaceForPara");

function createElem() {

    if (fetchInp.value !== "") {
       
        // Create a container for the task and its buttons
        var taskContainer = document.createElement("div");
        taskContainer.className = "task-container";

        // Create the task element
        var newElem = document.createElement("p");
        var textNewElem = document.createTextNode(fetchInp.value);
        newElem.appendChild(textNewElem);

        fetchInp.value = "";

        // Create the delete button
        var delBtn = document.createElement("button");
        delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        delBtn.className = "del-btn";

        // Create the edit button
        var editBtn = document.createElement("button");
        editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        editBtn.className = "edit-btn";

        // Append the task and buttons to the container
        taskContainer.appendChild(newElem);
        taskContainer.appendChild(editBtn);
        taskContainer.appendChild(delBtn);


        // Attach event listeners to the delete and edit buttons
        delBtn.onclick = function() {
            spaceForPara.removeChild(taskContainer);
        };

        editBtn.onclick = function() {
            var newText = prompt("Enter new text:");
            if (newText !== null) {
                newElem.firstChild.nodeValue = newText;
            }
        };

        // Append the container to the spaceForPara div
        spaceForPara.appendChild(taskContainer);
    }
}

function deleteAll(){
    spaceForPara.innerHTML = ""
}
