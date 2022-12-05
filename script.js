//API Call
const API_URL = "https://picsum.photos/v2/list?page=2&limit=32";
const result = document.getElementById("photo-area");
// Function to load photos
async function loadphotos() {
  try {
    const res = await fetch(API_URL);
    const jsonres = await res.json();
    console.log(jsonres);
    jsonres.map((photo) => {
      //Here the photos will be appended
      result.innerHTML += `<div id="card" class="card" style={{"width: 18rem;"}}>
      <img src="${photo.download_url}" class="card-img-top" alt="photography">
      <div class="card-body">
          <p class="card-text text-center"> <strong>Author</strong>:<b>${photo.author}</b></p>
      </div>
  </div>`;
    });
  } catch (err) {
    console.log(err);
  }
}
