let button = document.querySelector("#submit")
let input = document.querySelector('#search')
let output = document.querySelector('#output')


button.addEventListener('click',(e)=>{
    getDataFromItunes()
})
function getDataFromItunes(){
    let url='https://itunes.apple.com/search?term='+input.value
    fetch(url)
    .then(data => data.json())
    .then(json => {
        console.log(json)
    })
    .catch(error => console.log(error))
}