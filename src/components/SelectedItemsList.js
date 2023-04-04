class SelectedItemsList {
  listElements = [];
  constructor(selector) {
    this.list = document.querySelector(selector);
  }

  createSelectedElement(name, owner, stars) {
    const spanName = document.createElement("span");
    spanName.innerText = "Name: " + name;

    const spanOwner = document.createElement("span");
    spanOwner.innerText = "Owner: " + owner;

    const spanStars = document.createElement("span");
    spanStars.innerText = "Stars: " + stars;

    const textDiv = document.createElement("div");

    textDiv.appendChild(spanName);
    textDiv.appendChild(spanOwner);
    textDiv.appendChild(spanStars);

    const div = document.createElement("div");
    const li = document.createElement("li");

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
}

export { SelectedItemsList };
