class SelectedItemsList {
  listElements = [];
  constructor(selector) {
    this.list = document.querySelector(selector);
  }

  createSelectedElement(name, owner, stars, id) {
    const spanName = document.createElement("span");
    spanName.insertAdjacentText("afterbegin", "Name: " + name);

    const spanOwner = document.createElement("span");
    spanOwner.insertAdjacentText("afterbegin", "Owner: " + owner);

    const spanStars = document.createElement("span");
    spanStars.insertAdjacentText("afterbegin", "Stars: " + stars);

    const textDiv = document.createElement("div");

    textDiv.appendChild(spanName);
    textDiv.appendChild(spanOwner);
    textDiv.appendChild(spanStars);

    const div = document.createElement("div");
    div.classList.add("close-btn");

    const li = document.createElement("li");
    li.setAttribute("data-id", id);

    li.appendChild(textDiv);
    li.appendChild(div);

    this.listElements.unshift(li);
    return li;
  }

  render() {
    this.listElements.forEach((element) => {
      this.list.appendChild(element);
    });
  }

  getList() {
    return this.list;
  }

  resetList() {
    this.listElements = [];
    this.list.innerHTML = "";
  }

  removeElement(id) {
    this.listElements = this.listElements.filter(
      (element) => element.getAttribute("data-id") !== id
    );
  }
}

export { SelectedItemsList };
