import { getUsuarios, getPostsByUserId } from "./api.js";
import { mostrarUsuarios, mostrarPosts } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  const usuarios = await getUsuarios();
  mostrarUsuarios(usuarios);
  const posts = await getPostsByUserId();
  mostrarPosts(posts);
});
