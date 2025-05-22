function sumArray() {
  const input = document.getElementById("arraySum").value;
  const arr = input.split(",").map(num => Number(num.trim()));
  const suma = arr.reduce((acum, num) => acum + num, 0);
  document.getElementById("result").textContent = "La suma es: " + suma;
}