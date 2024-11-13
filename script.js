function addTask() {
    const container = document.querySelector(".main-container");
    const taskInput = document.getElementById("taskInput");
    const priorityInput = document.getElementById("priorityInput");

    if (taskInput.value.trim()) {
        const card = document.createElement("div");
        card.classList.add("card", priorityInput.value); 

        const text = document.createElement("p");
        text.textContent = taskInput.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";

        deleteBtn.onclick = function () {
            if (card.classList.contains("alta")) {
                const confirmation = confirm(
                    "¿Estás seguro de que deseas eliminar esta tarea de alta prioridad?"
                );
                if (confirmation) {
                    container.removeChild(card); 
                }
            } else {
                container.removeChild(card);
            }
        };

        card.appendChild(text);
        card.appendChild(deleteBtn);
        container.appendChild(card);

        taskInput.value = "";
    }
}
