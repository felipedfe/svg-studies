const rect = document.getElementById("rec");

const button = document.getElementById("but");

let strokeWidth = 5;

button.addEventListener("click", () => {
  strokeWidth += 3;
  // rect.setAttribute("stroke-width", `${strokeWidth}`)
  rect.classList.toggle("active");
})
