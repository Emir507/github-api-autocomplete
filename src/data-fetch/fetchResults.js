export default async function (searchString) {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${searchString}&per_page=5`
  );
  const data = await res.json();
  return data.items;
}
