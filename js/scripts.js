// var remove =
// var complete =
document.getElementById('addItemToList').addEventListener('click', function() {
  let value = document.getElementById('NewItem').value;
  if (value)  addNewItemTodo(value);
})



// adds item to the to do list
function addNewItemTodo(NewItem) {
  var doneList = document.getElementById("complete")
  var notDoneList = document.getElementById("incomplete")

var item = document.createElement("li");
item.innerText = NewItem;

var buttons = document.createElement("div");
buttons.classList.add('buttons');

var remove = document.createElement("button");
buttons.classList.add("remove");
remove.innerText = "Delete";

var complete = document.createElement('button');
complete.classList.add("complete");
complete.innerText = "Complete";

buttons.appendChild(remove);
buttons.appendChild(complete);
item.appendChild(buttons);

notDoneList.insertBefore(item, notDoneList.childNodes[0]);


}
