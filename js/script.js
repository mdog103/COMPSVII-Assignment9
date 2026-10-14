console.log("script.js loaded");
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=MZa3dhlEgFW10VHkj6nLabUNto7WQd1X&q=cats&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

async function giphy() {
  const response = await fetch(endpoint);
  return await response.json();
}

giphy().then((data) => {
  console.log(data);
  console.log(data.data[0].images.original.url);

  const images = data.data.map((item) => item.images.original.url);
  console.log(images);
});
document.querySelector("#fetch-gif-btn").addEventListener("click", async () => {
  const data = await giphy();
  const images = data.data.map((item) => item.images.original.url);
  const gifContainer = document.querySelector("#gif-container");

  images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.classList.add("col-4", "mb-4");
    gifContainer.appendChild(imgElement);
  });
});

console.log(document.querySelector("#fetch-gif-btn"));
console.log(document.querySelector("#gif-container"));