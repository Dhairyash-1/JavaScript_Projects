const options = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "ed6adc3187msh9c479bdd8dcd9f2p18d3c7jsn8e62560cc0d6",
    "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
  },
};
const image = document.getElementById("image");
async function fetchMovie(name) {
  const res = await fetch(
    `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${name}&country=us&type=movie&output_language=en`,
    options
  );
  const data = await res.json();
  console.log(data);
  // console.log(data.result[0].posterPath);
  let url = data.result[0].posterURLs[500];
  console.log(url);
  image.src = url;
}
fetchMovie("batman");
