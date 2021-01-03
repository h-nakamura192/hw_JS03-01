'use strict';
const output = document.getElementById("output");
const taskArrays = [];
let count = 0;

document.getElementById("TaskAddBtn").addEventListener("click", function() {
  const comment = document.getElementById("comment").value;
  taskArrays.push({
    id: count,
    comment: comment,
    status: '作業中'
  });

  count ++;

  const content1 = `${taskArrays[taskArrays.length-1].id}`;
  const content2 = `${taskArrays[taskArrays.length-1].comment}`;

  const div = document.createElement("div");  
  div.classList.add('box-wp');
  output.appendChild(div);

  const div1 = document.createElement("div");  
  div1.innerHTML = content1;
  div1.classList.add('box1');
  div.appendChild(div1);

  const div2 = document.createElement("div");  
  div2.innerHTML = content2;
  div2.classList.add('box2');
  div.appendChild(div2);

  const addButton1 = document.createElement("input");
  addButton1.type = 'button';
  addButton1.value = taskArrays[taskArrays.length-1].status;
  addButton1.classList.add('box3');
  addButton1.classList.add('TaskAddBtn');
  div.appendChild(addButton1);

  const addButton2 = document.createElement("input");
  addButton2.type = 'button';
  addButton2.value = '削除';
  addButton2.classList.add('box3');
  addButton2.classList.add('TaskAddBtn');
  div.appendChild(addButton2);  
})
