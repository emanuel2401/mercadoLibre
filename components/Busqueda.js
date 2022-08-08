export function Busqueda() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.innerHTML = `
    <div class='container search-product'>
       <a href='/mercadoLibre'> <img src="./assets/img/logo.png" alt="Logo"></a>
        <form class='search' id='search-form'>
            <input type="search" name='search' id="search-form" placeholder='Nunca dejes de buscar'>
            <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>
    `;

  document.addEventListener("submit", (e) => {
    if (!e.target.matches(".search")) return false;
    e.preventDefault();
    let v = e.target.search.value;
    let value = new String(v);
    let valor = value.replace(/\s+/g, "");

    localStorage.setItem("mlSearch", valor);
    location.hash = `#resultado/items?search=${valor}`;
  });

  return header;
}
