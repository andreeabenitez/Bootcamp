import { getUsuarios } from "./api.js";
import { mostrarUsuarios } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  const usuarios = await getUsuarios();
  mostrarUsuarios(usuarios);
});
