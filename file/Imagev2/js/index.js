function changeFunc(i) {
nsfw = document.getElementById("vale").value
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json(); 
}
postData(`https://api.waifu.pics/many/sfw/${i}`)
  .then((data) => {
    console.log(data.files)
      Array.from(document.querySelectorAll('.gbr').forEach((elmt, index) => {
        elmt.innerHTML = `<img src=${data.files[index]} />`
      }))
  })
}