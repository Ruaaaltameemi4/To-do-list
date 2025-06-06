function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
  
    if (task === "") return;
  
    const li = document.createElement("li");
    li.textContent = task;
  
    li.onclick = function () {
        li.classList.toggle("completed");
      
        if (li.classList.contains("completed")) {
          li.insertAdjacentText("afterbegin", "✅ ");
        } else {
          li.textContent = task; // reset to original
          li.appendChild(deleteBtn); // reattach delete button
        }
      };      
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
      li.remove();
    };
  
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  