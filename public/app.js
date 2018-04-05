const mainDiv = document.getElementById('main')

const render = html => {
  mainDiv.innerHTML = html
}

const controllers = {
  '/': () => {
    console.log("je suis dans la route/")
    const test = '<p>Je me choisis des supers caractérisitique!</p><a class="btn btn-success btn-lg" href="/opponent" role="button">See Opponent»</a>'
    render(test)
  },
  '/opponent' : () => {
    const fakeOpponent = '<p>Your opponent: Hubert de Montmirail</p><a class="btn btn-success btn-lg" href="/game" role="button">Ready to play»</a>'
    render(fakeOpponent)
  },
  '/game' : () =>{
    render("<p>Now playing...wait 2 sec to see result alert</p>")
    setTimeout(() => alert("YOU WIN!!!"), 2000);

  },
  '*': () => render('<h1>Not Found</h1>')

}

// const routing = () => {
//   const routes = [
//     '/',
//     '/opponent',
//     'game',
//     '*'
//   ]
//   routes.forEach(
//     path => page(path, controllers[path])
//   )
//   page()
// }
//
// //appel cette fonction pour gérer les routes
// routing()

const route = pathname => {

}


(() => {

  ['/', '/opponent', '/game', '*'].forEach(
    path => page(path, controllers[path])
  )
  page()
  // route()

})()
