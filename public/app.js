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

    getTotal = () => {
      console.log("coucou je suis dans getTotal")
        const total = document.getElementById("total")
        const first = document.getElementById("value_range1").innerText
        const second = document.getElementById("value_range2").innerText
        const third = document.getElementById("value_range3").innerText
        const fourth = document.getElementById("value_range4").innerText
        total.innerHTML = "" + (Number(first) + Number(second) + Number(third) + Number(fourth))
    }
    //on récupère la valeur de chaque range-slider
    const rangeSlider = function () {
        let slider = $('.range-slider'),
            range = $('.range-slider__range'),
            value = $('.range-slider__value');

        slider.each(function () {
            value.each(function () {
                const value = $(this).prev().attr('value');
                $(this).html(value);
            });

            range.on('input', function () {
                console.log(this.value)
                $(this).next(value).html(this.value)
                getTotal()
            });
        });
    };
    rangeSlider()
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
