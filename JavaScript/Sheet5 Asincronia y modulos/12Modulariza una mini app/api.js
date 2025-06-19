export async function getUsuarios() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await response.json();
    return usuarios;
  } catch (error) {
    console.error("Error", error);
  }
}
export async function getPostsByUserId() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error", error);
  }
}
