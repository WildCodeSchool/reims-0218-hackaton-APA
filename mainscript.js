const randomOpponent = Math.round(Math.random() * 570) +1

let opponent = {}
const callMyLink = () => {
  const url = `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${randomOpponent}.json`

  fetch(url)
    .then(reponse => {
      return reponse.json()
    })
    .then(result => opponent = result)
}
callMyLink()
console.log(result)
