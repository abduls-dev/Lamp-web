function toggleLight() {
  const button = document.querySelector("button");
  const light = document.getElementById("light");
  button.classList.toggle("active");
  light.classList.toggle("active");
}
