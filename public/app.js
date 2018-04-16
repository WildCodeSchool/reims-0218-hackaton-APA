const mainDiv = document.getElementById('main')

const render = html => {
  mainDiv.innerHTML = html
}

const makeOpponentCard = (item, fun) => {
  const list = fun(item)
  const innerText =`
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" src="${item.images.sm}" alt="Thumbnail [100%x225]" />
      <div class="card-body">
        <p class="card-text" style="height: 80px">${item.name}</p>
        <ul>${list}<ul>
      </div>
    </div>
  </div>`
  return innerText}

const displayComputer = (obj) => {
  let list = '';
  list += `<li>name: ${obj.name}</li>`
  const keys = Object.keys(obj.powerstats)
  for (let key of keys) {
    list += '<li>' +key + ':' + obj.powerstats[key] + '</li>'
  }
  return list
}

const displayPlayer = (obj) => {
  let list = '';
  list += `<li>name: ${obj.name}</li>`
  const keys = Object.keys(obj.stats)
  for (let key of keys) {
   list += `<li>${key} : ${obj.stats[key]}</li>`
  }
  return list
}

class Player {
  constructor(intelligence, strength, speed, durability, power, combat) {
    this.lifePoints = 100;
    this.stats = {
      intelligence: intelligence,
      strength: strength,
      speed: speed,
      durability: durability,
      power: power,
      combat: combat
    };
  }
  updateLifePoint(blow) {
    this.lifePoints -= blow;
  }
  addChance(ability) {
    this.stats.power += Math.round(Math.random() * this.stats[ability]);
  }
  resetPower() {
    this.stats.power = this.initialPower
  }
}
//class HumanPlayer
class HumanPlayer extends Player {
  constructor(
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat,
    name,
    battleCry
  ) {
    super(intelligence, strength, speed, durability, power, combat)
    this.name = name,
    this.battleCry = battleCry,
    this.total = intelligence + strength + speed + durability
  }
}
//class ComputerPlayer
class ComputerPlayer extends Player {
  constructor(
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat,
    name,
    url
  ) {
    super(intelligence, strength, speed, durability, power, combat);
    this.name = name;
    this.url = url
  }

}

const serializeForm = form => {
  const data = {}
  const elements = form.getElementsByClassName('myForm')
  for(el of elements) {
    data[el.name] = el.value
  }
  return data
}

const controllers = {
  '/': () => {
    console.log('je suis dans la route /')
    render(`
      <h2>Choose your characteristics:</h2>
      <form id="userForm">
        <div class="form-group row justify-content-center">
            <label for="inputIntelligence" class="col-sm-2 col-form-label align-self-center">Intelligence:</label>
            <div class="col-sm-10 align-self-center">
                <div class="range-slider">
                    <input class="myForm range-slider__range" name="intelligence" type="range" value="50" min="0" max="100">
                    <span id="inputIntelligence" class="range-slider__value">0</span>
                </div>
            </div>
        </div>
        <div class="form-group row justify-content-center">
            <label for="inputStrength" class="col-sm-2 col-form-label align-self-center">Strength:</label>
            <div class="col-sm-10 align-self-center">
                <div class="range-slider">
                    <input class="myForm range-slider__range" name="strength" type="range" value="50" min="0" max="100">
                    <span id="InputStrength" class="range-slider__value">0</span>
                </div>
            </div>
        </div>
        <div class="form-group row justify-content-center">
            <label for="inputSpeed" class="col-sm-2 col-form-label align-self-center">Speed:</label>
            <div class="col-sm-10 col align-self-center">
                <div class="range-slider">
                    <input class="myForm range-slider__range" name="speed" type="range" value="50" min="0" max="100">
                    <span id="inputSpeed" class="range-slider__value">0</span>
                </div>
            </div>
        </div>
        <div class="form-group row justify-content-center">
            <label for="inputDurability" class="col-sm-2 col-form-label align-self-center">Durability:</label>
            <div class="col-sm-10 col align-self-center">
                <div class="range-slider">
                    <input class="myForm range-slider__range" name="durability" type="range" value="50" min="0" max="100">
                    <span id="inputDurability"  class="range-slider__value">0</span>
                </div>
            </div>
        </div>
        <div class="form-group">
          <label for="inputName">Name:</label>
          <input type="text" class="myForm col-sm-10 form-control" id="inputName" name="name" placeholder="Votre nom de superhéros">
        </div>
        <div class="form-group">
          <label for="inputBattleCry">Battle cry:</label>
          <input type="text" class="myForm col-sm-10 form-control" id="battleCry" name="battleCry" placeholder="Votre cri de guerre !">
        </div>
        <div class="form-group row justify-content-center">
            <div class="col-sm-10">
                <button id="recordStats" class="btn btn-success btn-lg" role="button"> Enregistrer mes stats</button>
            </div>
        </div>
    </form>
    <p id="total"></p>
    <a id="finishCreation" class="btn btn-danger btn-lg" href="/opponent" role="button">Choisir mon adversaire</a>`
    )

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
              $(this).next(value).html(this.value)
          });
      });
      //return userStats
  };

    rangeSlider()

    const form = document.getElementById('userForm')
    form.addEventListener('submit', e => {
      e.preventDefault()
      const data = serializeForm(form)
      sessionStorage.setItem('user', JSON.stringify(data))
    })
  },

  /////////////////////////////////////////////////////
  // route pour l'étape adversaire
  ///////////////////////////////////////////////////
  '/opponent' : () => {
    const tsTest = 'hello'
      render(`
      <div id="opponentRow" class="row">
      ${tsTest}
      </div>
      <button id="fight" class="btn btn-success btn-lg" role="button">Ready to fight!!!</button>`)

      const url = `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json`

      fetch(url)
        .then(reponse => {
          return reponse.json();
        })
        .then(result => {
          const playerHuman1 = new HumanPlayer(50, 70, 20, 67, 70, 60, 'Thomas', 'Fdsdf')
          const selectedHeroes = result.filter(hero => {
            const totalHero = hero.powerstats.intelligence + hero.powerstats.strength + hero.powerstats.speed + hero.powerstats.durability
            return totalHero < playerHuman1.total + 10 && totalHero > playerHuman1.total - 10
          })
          //Générer 3 computerPlayers aléatoires
          const first = Math.floor(Math.random() * selectedHeroes.length) + 1
          const second = Math.floor(Math.random() * selectedHeroes.length) + 1
          const third = Math.floor(Math.random() * selectedHeroes.length) + 1

          let heroesArr = [selectedHeroes[first], selectedHeroes[second], selectedHeroes[third]]
          const heroesObjects = heroesArr.map(obj => new ComputerPlayer(obj.powerstats.intelligence, obj.powerstats.strength, obj.powerstats.speed, obj.powerstats.durability, obj.powerstats.power, obj.powerstats.combat, obj.name, obj.images.sm))
          const allOpponents = heroesArr. reduce((carry, opponent) => carry + makeOpponentCard(opponent, displayComputer), '')
          const displayCards = document.getElementById('opponentRow')
          displayCards.innerHTML = allOpponents
        
          const displayHuman = document.getElementById('display');
          displayPlayer(playerHuman1, displayHuman)
           
          //on ajoute random power et 100 en lifePoints

          //la boucle des différents tours
          const computer = heroesObjects[1]
            while(playerHuman1.lifePoints > 0 && computer.lifePoints > 0) {
              playerHuman1.addChance('strength')
              computer.updateLifePoint(playerHuman1.stats.power)
              playerHuman1.resetPower()
              computer.addChance('speed')
              playerHuman1.updateLifePoint(computer.stats.power)
              computer.resetPower()
            }
            
            //fonction à déclencher sur le click
          const winner2 = () => playerHuman1 > computer ? alert(`Le vainqueur est ${playerHuman1.name}`) : alert(`Le vainqueur est ${computer.name}`)
            
          const fightButton = document.getElementById('fight')
          fightButton.addEventListener('click', winner2)
        })
      },
  '/game' : () =>{
    render('<p>Now playing...wait 2 sec to see result alert</p>')
    setTimeout(() => alert('YOU WIN!!!'), 2000);

  },
  '*': () => render('<h1>Not Found</h1>')

}

const route = pathname => {

}


(() => {

  ['/', '/opponent', '/game', '*'].forEach(
    path => page(path, controllers[path])
  )
  page()
  // route()

})()

