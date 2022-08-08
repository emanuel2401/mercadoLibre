export function Post(props) {
  let { price, sold_quantity, title, pictures } = props;
  return `
        <section class="post-page">
            <div class='product'>
                <div><img src='${pictures[0].url}' alt="Producto"></div>
                <div class="details">
                    <span class='sold'>Nuevo - ${sold_quantity} vendidos</span>
                    <p>${title}</p>
                    <span class='price'>$ ${price}</span>
                    <button>Comprar</button>
                </div>
            </div>
            <div class='description'>
                <h4>Descripción del producto</h4>
                <p>${description}</p>
            </div>
        </section>
        `;
}
