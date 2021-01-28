
let button = document.querySelector("#submit")
let input = document.querySelector('#search')
let output = document.querySelector('#output')


button.addEventListener('click',(e)=>{
    getDataFromItunes()
})
function getDataFromItunes(){
    let url='https://itunes.apple.com/search?term='+input.value
    let cors = 'https://cors-anywhere.herokuapp.com/'
    fetch(cors+url)
    .then(data => data.json())
    .then(json => {
        console.log(json)

        let finalHTML=''
        json.results.forEach(song =>{
            finalHTML +=
            `
            <div class="col s4 m4 l4">
            <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${song.artworkUrl100}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${song.trackName}<i class="material-icons right">more_vert</i></span>
              <p>${song.artistName}</p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Price: ${song.trackPrice}<i class="material-icons right">close</i></span>
              <span class="card-title grey-text text-darken-4">Time: ${song.trackTimeMillis}<i class="material-icons right">close</i></span>
              <span class="card-title grey-text text-darken-4">Country: ${song.country}<i class="material-icons right">close</i></span>

              <span class="card-title grey-text text-darken-4">Genre: ${song.primaryGenreName}<i class="material-icons right">close</i></span>
              <p>Album name: ${song.collectionName}</p>
            </div>
          </div>
          </div>
            `
        })
        output.innerHTML=finalHTML
    })
    .catch(error => console.log(error))
}