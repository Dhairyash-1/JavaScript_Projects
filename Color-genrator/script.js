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
    <span class='hex-value' >${colorValue}</span>`;
    colorDiv.addEventListener("click", () => copyText(colorDiv, colorValue));
    containner.appendChild(colorDiv);
  }
};
genratepalette();

// create new palettes on every click on button
genratorColorBtn.addEventListener("click", genratepalette);

// Copy text function

function copyText(elm, hexvalue) {
  let colorTextSpan = elm.querySelector(".hex-value");
  console.log(colorTextSpan);

  // below navigator clipboard writethe recieved parm hexvalue in clipboard and return promise
  navigator.clipboard.writeText(hexvalue).then(() => {
    colorTextSpan.innerText = "copied";
    setTimeout(() => (colorTextSpan.innerText = hexvalue), 1000).catch(() =>
      alert("Failed to copy color Code")
    );
  });
}
