export function mostrarUsuarios(lista) {
  const ul = document.getElementById("usuarios");
  lista.forEach((usuario) => {
    const li = document.createElement("li");
    li.textContent = usuario.name;
    li.addEventListener("click", () => {
      const userPosts = usuario.posts;
      mostrarPosts(userPosts);
    });

    ul.appendChild(li);
  });
}

export function mostrarPosts(posts) {
  const ul = document.getElementById("posts");
  ul.forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    ul.appendChild(li);
  });
}
