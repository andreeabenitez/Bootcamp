export function mostrarUsuarios(lista) {
  const ul = document.createElement("ul");
  lista.forEach((usuario) => {
    const li = document.createElement("li");
    li.textContent = usuario.name;
    ul.appendChild(li);
  });
  const container = document.getElementById("usuarios-container");
  container.innerHTML = "";
  container.appendChild(ul);
}
export function mostrarPosts(posts) {
  const ul = document.createElement("ul");
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    ul.appendChild(li);
  });
  const container = document.getElementById("posts-container");
  container.innerHTML = "";
  container.appendChild(ul);
}
