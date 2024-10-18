// LESSON 1
// const rect = document.getElementById("rec");

// const button = document.getElementById("but");
// let strokeWidth = 5;

// button.addEventListener("click", () => {
//   strokeWidth += 3;
//   // rect.setAttribute("stroke-width", `${strokeWidth}`)
//   rect.classList.toggle("active");
// })

// ICONIFY
// colecao : nome-do-icone
const icons = ['mdi:home', 'fa-solid:coffee', 'ic:baseline-face', 'bi:heart-fill', 'feather:bell'];

const iconContainer = document.getElementById('icon-container');

// função para buscar os ícones via API do Iconify e renderizar na página
async function loadIcons() {
    for (let icon of icons) {
        const response = await fetch(`https://api.iconify.design/${icon}.svg`);
        const svgCode = await response.text(); // recebe o código SVG como texto
        console.log(svgCode);

        // cria um div para armazenar o ícone
        const iconDiv = document.createElement('div');
        iconDiv.classList.add('icon');
        iconDiv.innerHTML = svgCode; // insere o SVG diretamente no HTML

        // adiciona o ícone no container
        iconContainer.appendChild(iconDiv);
    }
}


loadIcons();

