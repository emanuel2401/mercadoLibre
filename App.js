import { Busqueda } from "./components/Busqueda.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";

export function App() {
  const root = document.getElementById("root");
  root.innerHTML = null;
  root.appendChild(Busqueda());
  root.appendChild(Main());

  Router();
}
