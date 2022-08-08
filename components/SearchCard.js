window.description = "";
export function SearchCard(props) {
  let { id, title, price, address, thumbnail } = props;

  function click() {
    fetch(
      `https://api.mercadolibre.com/items/${localStorage.getItem(
        "mlPostId"
      )}/description`
    )
      .then((res) => res.json())
      .then((data) => {
        description = data.plain_text;
      });
  }

  document.addEventListener("click", (e) => {
    if (!e.target.closest("[data-id]")) return false;
    localStorage.setItem("mlPostId", e.target.dataset.id);
    click();
  });

  return `
    <article class="post-card" data-id="${id}">
    <a href='#detalle/${id}'  data-id="${id}">
    <div class='details' data-id="${id}">
      <div class='product-img' data-id="${id}"><img src="${thumbnail}" alt="" /></div>
      <div data-id="${id}">
        <span data-id="${id}">$ ${price}</span>
        <p data-id="${id}">${title}</p>
       </div>
    </div>
    <div data-id="${id}" class='direction'>
       <address>${address.state_name}</address>
     </div>
     </a>
    </article>
    `;
}
