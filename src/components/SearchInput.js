import debounce from "Helpers/debounce";
import fetchResults from "DataFetch/fetchResults";

class SearchInput {
  constructor(selector) {
    this.input = document.querySelector(selector);
  }

  performDebouncedSearch = debounce(async (args) => {
    const results = await fetchResults(args);
    return results;
  }, 400);

  getInput() {
    return this.input;
  }

  resetInput() {
    this.input.value = "";
  }
}

export { SearchInput };
