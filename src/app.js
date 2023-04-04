import { SuggestionList } from "Components/SuggestionItemsList";
import { SelectedItemsList } from "Components/SelectedItemsList";
import { SearchInput } from "Components/SearchInput";

import "./styles/styles.scss";

const searchInput = new SearchInput(".search-input");
const selectedItemsListElement = new SelectedItemsList(".selected-items");

const suggestionsList = new SuggestionList(".search-input__suggestions");

let results = [];

searchInput.getInput().addEventListener("input", async (e) => {
  if (e.target.value.trim()) {
    results = await searchInput.performDebouncedSearch(e.target.value);
  } else {
    results = [];
  }

  suggestionsList.resetListElement();
  results.forEach((item) => {
    suggestionsList.createSuggestionElement(item.full_name, item.id);
  });
  suggestionsList.render();
});

suggestionsList.getList().addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const foundRepo = results.find(
      (repo) => repo.id == e.target.getAttribute("data-id")
    );

    const { name, owner, stargazers_count, id } = foundRepo;

    suggestionsList.resetListElement();

    selectedItemsListElement.createSelectedElement(
      name,
      owner.login,
      stargazers_count,
      id
    );
    selectedItemsListElement.render();

    searchInput.resetInput();
  }
});

selectedItemsListElement.getList().addEventListener("click", (e) => {
  if (e.target.classList.contains("close-btn")) {
    const itemIdToRemove = e.target.parentNode.getAttribute("data-id");
    selectedItemsListElement.removeElement(itemIdToRemove);
    e.target.parentNode.remove();
  }
});
