'use strict';
const output = document.getElementById("output");
const taskArrays = [];
let count = 0;

function TaskAdd() {
  const InputComment = document.getElementById("InputComment").value;
  taskArrays.push({
    id: count,
    comment: InputComment,
    status: '作業中'
  });
  count ++;
}
document.getElementById("TaskAddBtn").addEventListener("click", function() {

  output.innerHTML = "";
  TaskAdd();

  for(let i = 0; i <= taskArrays.length-1; i++){
    const div = document.createElement("div");  
    div.classList.add('box-wp');
    output.appendChild(div);

    function TaskDisplay() {
      const TaskId = document.createElement("p");  
      TaskId.textContent = `${taskArrays[i].id}`;
      TaskId.classList.add('box1');
      div.appendChild(TaskId);
    
      const TaskComment = document.createElement("p");  
      TaskComment.textContent = `${taskArrays[i].comment}`;
      TaskComment.classList.add('box2');
      div.appendChild(TaskComment);
    }
    
    function CreateStatusBtn() {
      const addButton1 = document.createElement("input");
      addButton1.type = 'button';
      addButton1.value = taskArrays[i].status;
      addButton1.classList.add('box3');
      addButton1.classList.add('TaskAddBtn');
      div.appendChild(addButton1);
    }
    
    function CreateDeleteBtn() {
      const addButton2 = document.createElement("input");
      addButton2.type = 'button';
      addButton2.value = '削除';
      addButton2.classList.add('box3');
      addButton2.classList.add('TaskAddBtn');
      div.appendChild(addButton2);  
    }

    TaskDisplay();
    CreateStatusBtn();
    CreateDeleteBtn();
  }
})