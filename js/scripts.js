// var remove =
// var complete =
document.getElementById('addItemToList').addEventListener('click', function() {
  let value = document.getElementById('NewItem').value;
  if (value) {
    addNewItemTodo(value);
    document.getElementById('NewItem').value = "";
  }
})

// edits text on an li entry

function editText () {
  let thisLi = this.parentNode.parentNode;
  let newText = document.createTextNode(prompt("write a new to do!", "Walk the dog."))
  thisLi.classList.add("thisLi");
  thisLi.removeChild(thisLi.childNodes[0]);
  thisLi.insertBefore(newText,thisLi.childNodes[0])
  // thisLi.innerText = "";

  // thisLi.NewItem = prompt("Write a new To-Do!", "Walk the Dog");

}

// moves items from incomplete to complete & Back.

function completeItem() {
  let item = this.parentNode.parentNode;
  let parent = this.parentNode.parentNode.parentNode;
  let id = parent.id;
  let completeParent = this.parentNode;
  let complete = this;

  var target = (id === "incomplete") ? document.getElementById("complete") : document.getElementById("incomplete");

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
  completeParent.removeChild(complete);


  let redo = document.createElement('button');
  redo.classList.add("buttons");
  redo.innerText = (id === "complete") ? "Complete" : "Re-Do";

  completeParent.appendChild(redo);
  redo.addEventListener("click", completeItem);

}

// removes item form the list
function removeItem() {
  let parent = this.parentNode.parentNode.parentNode;
  let item = this.parentNode.parentNode
  parent.removeChild(item);
}


// adds item to the to do list from text entry
function addNewItemTodo(NewItem) {
  var doneList = document.getElementById("complete")
  var notDoneList = document.getElementById("incomplete")

  let item = document.createElement("li");
  item.innerText = NewItem;

  let buttons = document.createElement("div");
  buttons.classList.add('buttons');

  let remove = document.createElement("button");
  buttons.classList.add("remove");
  remove.innerText = "Delete";
  remove.addEventListener("click", removeItem);

  let edit = document.createElement("button");
  buttons.classList.add("edit");
  edit.innerText = "Edit";
  edit.addEventListener("click", editText)

  let complete = document.createElement('button');
  complete.classList.add("complete");
  complete.innerText = "Complete";

  complete.addEventListener("click", completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  buttons.appendChild(edit);
  item.appendChild(buttons);

  notDoneList.insertBefore(item, notDoneList.childNodes[0]);
}
