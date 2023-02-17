const containner = document.querySelector(".containner");
const genratorColorBtn = document.querySelector(".btn");

// function to create the color palettes
const genratepalette = () => {
  containner.innerHTML = "";
  for (let i = 1; i <= 8; i++) {
    const randomHex = Math.floor(Math.random() * 0xfffff).toString(16);
    const colorValue = `#${randomHex.padStart(6, "0")}`;
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("box");
    colorDiv.innerHTML = `
    <div class="color-bg" style = "background: ${colorValue} "></div>
    <span class='hex-value' >${colorValue}</span>
  `;
    containner.appendChild(colorDiv);
  }
};
genratepalette();

// create new palettes on every click on button
genratorColorBtn.addEventListener("click", genratepalette);
