class SuggestionList {
  listItemElements = [];

  constructor(selector) {
    this.listElement = document.querySelector(selector);
  }

  createSuggestionElement(full_name, id) {
    const li = document.createElement("li");
    li.setAttribute("data-id", id);
    li.insertAdjacentText("afterbegin", full_name);
    this.listItemElements.push(li);
    return li;
  }

  getList() {
    return this.listElement;
  }

  resetListElement() {
    this.listItemElements = [];
    this.listElement.innerHTML = "";
    console.log(this.listItemElements);
    console.log(this.listElement);
  }

  render() {
    this.listItemElements.forEach((element) => {
      this.listElement.appendChild(element);
    });
  }
}

export { SuggestionList };
