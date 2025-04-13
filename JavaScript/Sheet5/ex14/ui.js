export function mostrarUsuarios(lista, onClickUsuario) {
  const ul = document.getElementById("usuarios");
  lista.forEach((usuario) => {
    const li = document.createElement("li");
    li.textContent = usuario.name;
    li.addEventListener("click", () => {
      onClickUsuario(usuario.id)
    });

    ul.appendChild(li);
  });
}

export function mostrarPosts(posts) {
  const ul = document.getElementById("posts");
  ul.innerHTML = "";
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    ul.appendChild(li);
  });
}
