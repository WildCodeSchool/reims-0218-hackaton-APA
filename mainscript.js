const randomOpponent = Math.round(Math.random() * 570) +1


const callMyLink = () => {
  const url = `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/1.json`

  fetch(url)
    .then(reponse => {
      return reponse.json()
    })
    .then(result => {
      console.log(result)
      const opponentStats = result.powerstats
      console.log(opponentStats)
      //const opponent = opponentStats.reduce(((acc, carry) =>  acc + carry), '')
      let opponent = ''
      for (let stat in opponentStats){
        console.log("stat: ", opponentStats[stat])
          opponent += `<li>${} : ${opponentStats[stat]}</li>`
      }
      console.log(opponent)
      const displayOpponent = document.getElementById("opponentCard")
      displayOpponent.innerHTML = opponent
    })
}
callMyLink()
