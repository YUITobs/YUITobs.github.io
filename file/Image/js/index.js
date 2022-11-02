function changeFunc(i) {
nsfw = document.getElementById("vale").value
var url = `https://api.waifu.im/random/?is_nsfw=${nsfw}&selected_tags=${i}&gif=false&orientation=PORTRAIT&many=true&full=false`
console.log(nsfw)
fetch(url)
    .then(res => res.json())
    .then(data => {
      Array.from(document.querySelectorAll('.gbr').forEach((elmt, index) => {
        elmt.innerHTML = `<img src=${data.images[index].url} />`
      }))
  })
}