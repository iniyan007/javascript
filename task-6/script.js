const list = document.getElementById("list");
let draggedItem = null;

function getListItem(element) {
  return element.closest("li");
}

list.addEventListener("dragstart", (e) => {
  const item = getListItem(e.target);
  if (item) {
    draggedItem = item;
    item.classList.add("dragging");
  }
});

list.addEventListener("dragend", () => {
  draggedItem.classList.remove("dragging");

  document.querySelectorAll("li").forEach(li => {
    li.classList.remove("over");
  });
});

list.addEventListener("dragover", (e) => {
  e.preventDefault();

  const target = getListItem(e.target);

  if (target && target !== draggedItem) {
    document.querySelectorAll("li").forEach(li => li.classList.remove("over"));
    target.classList.add("over");
  }
});

list.addEventListener("dragleave", (e) => {
  const target = getListItem(e.target);
  if (target) {
    target.classList.remove("over");
  }
});

list.addEventListener("drop", (e) => {
  e.preventDefault();

  const target = getListItem(e.target);

  if (target && target !== draggedItem) {
    target.classList.remove("over");

    const bounding = target.getBoundingClientRect();
    const offset = e.clientY - bounding.top;

    if (offset > bounding.height / 2) {
      target.after(draggedItem);
    } else {
      target.before(draggedItem); 
    }
  }
});