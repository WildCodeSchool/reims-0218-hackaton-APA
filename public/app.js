const mainDiv = document.getElementById('main')

const render = html => {
  mainDiv.innerHTML = html
}

const controllers = {
  '/': () => {
    console.log("je suis dans la route /")
    render(`
      <h2>Choose your characteristics:</h2>
      <form>
        <div class="form-group row">
            <label for="inputIntelligence" class="col-sm-2 col-form-label">Intelligence:</label>
            <div class="col-sm-10">
                <div class="range-slider">
                    <input class="range-slider__range" type="range" value="50" min="0" max="100">
                    <span id="value_range1" class="range-slider__value">0</span>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputIntelligence" class="col-sm-2 col-form-label">Strength:</label>
            <div class="col-sm-10">
                <div class="range-slider">
                    <input class="range-slider__range" type="range" value="50" min="0" max="100">
                    <span id ="value_range2" class="range-slider__value">0</span>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputIntelligence" class="col-sm-2 col-form-label">Speed:</label>
            <div class="col-sm-10">
                <div class="range-slider">
                    <input class="range-slider__range" type="range" value="50" min="0" max="100">
                    <span id="value_range3" class="range-slider__value">0</span>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputIntelligence" class="col-sm-2 col-form-label">Durability:</label>
            <div class="col-sm-10">
                <div class="range-slider">
                    <input class="range-slider__range" type="range" value="50" min="0" max="100">
                    <span id="value_range4" class="range-slider__value">0</span>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-10">
                <a class="btn btn-success btn-lg" href="/game" role="button">See opponent »</a>
            </div>
        </div>
    </form>
    <p id="total"></p>`)
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
