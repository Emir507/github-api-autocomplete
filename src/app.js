import { SuggestionList } from "Components/SuggestionItemsList";
import { SelectedItemsList } from "Components/SelectedItemsList";
import { SearchInput } from "Components/SearchInput";

import "./styles/styles.scss";

const searchInput = new SearchInput(".search-input");
const selectedItemsListElement = new SelectedItemsList(".selected-items");

const suggestionsList = new SuggestionList(".search-input__suggestions");

let results = [];

searchInput.getInput().addEventListener("input", async (e) => {
  suggestionsList.resetListElement();
  if (e.target.value) {
    results = await searchInput.performDebouncedSearch(e.target.value);
  }
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

    const { name, owner, stargazers_count } = foundRepo;

    suggestionsList.resetListElement();

    selectedItemsListElement.createSelectedElement(
      name,
      owner.login,
      stargazers_count
    );
    selectedItemsListElement.render();

    searchInput.resetInput();
  }
});
