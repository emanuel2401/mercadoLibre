window.description = "";
export function SearchCard(props) {
  let { id, title, price, address, thumbnail } = props;

  async function click() {
    await fetch(
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
    <article class="post-card">
    <div class="product">
    <div class='details'>
      <div class='product-img'><img src="${thumbnail}"  alt="producto"/></div>
      <div>
        <span>$ ${price}</span>
        <p>${title}</p>
       </div>
    </div>
    <div class='direction'>
       <address>${address.state_name}</address>
       <a href='#detalle/${id}'  data-id="${id}">Ver producto</a>
     </div>
     </div>
    </article>
    `;
}
