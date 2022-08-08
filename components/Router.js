import { ajax } from "../helpers/ajax.js";
import { SearchCard } from "./SearchCard.js";
import { Post } from "./Post.js";

export async function Router() {
  let { hash } = location;
  let query = localStorage.getItem("mlSearch");

  const main = document.getElementById("main");
  if (hash.includes(`#resultado/items?search=${query}`)) {
    await ajax({
      url: `https://api.mercadolibre.com/sites/MLA/search?q=${query}`,
      cbSuccess: (search) => {
        let html = ``;
        if (search.length === 0) {
          html = `
                      <p class="error">
                      No existen resutados de busqueda para el termino
                      <mark>${query}</mark>
                      </p>
                  `;
        } else {
          search.results
            .slice(0, 4)
            .forEach((post) => (html += SearchCard(post)));
        }
        main.innerHTML = html;
      },
    });
  }
  if (hash === `#detalle/${localStorage.getItem("mlPostId")}`) {
    await ajax({
      url: `https://api.mercadolibre.com/items/${localStorage.getItem(
        "mlPostId"
      )}`,
      cbSuccess: (post) => {
        main.innerHTML = Post(post);
      },
    });
  }
}
