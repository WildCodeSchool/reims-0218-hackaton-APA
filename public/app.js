const mainDiv = document.getElementById('main')

const render = html => {
  mainDiv.innerHTML = html
}

const makeOpponentCard = (item, fun) => {
  const list = fun(item)
  const innerText =`
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" src=".." alt="Thumbnail [100%x225]" />
      <div class="card-body">
        <p class="card-text" style="height: 80px">${item.name}</p>
        <ul>${list}<ul>
      </div>
    </div>
  </div>`
  return innerText}

const displayComputer = (obj) => {
  console.log('notre display qui bugg: ', obj)
  let list = '';
  console.log('onva display:', obj.name)
  list += `<li>name: ${obj.name}</li>`
  console.log('ça marche?', obj.powerstats)
  const keys = Object.keys(obj.powerstats)
  console.log('nos clés: ', keys)
  for (let key of keys) {
    list += '<li>' +key + ':' + obj.powerstats[key] + '</li>'
  }
  return list
}

const displayPlayer = (obj) => {
  console.log('notre display qui bugg: ', obj)
  let list = '';
  console.log('onva display:', obj.name)
  list += `<li>name: ${obj.name}</li>`
  const keys = Object.keys(obj.stats)
  //console.log('nos clés: ', keys)
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
    console.log('original: ', this.stats.power);
    console.log('ability?', ability, this.stats[ability]);
    this.stats.power += Math.round(Math.random() * this.stats[ability]);
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
    battleCry
  ) {
    super(intelligence, strength, speed, durability, power, combat);
    this.name = name;
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


//fonction makeOpponent qui génère une carte bootrap

//objet pour l'humain. Déclaré ici, modifié dans les fonctions du form(route /),
//et réutilisé dans (/opponent) pour choisir les 3 potentiels adversaires

const controllers = {
  '/': () => {
    console.log('je suis dans la route /')
    render(`
      <h2>Choose your characteristics:</h2>
      <form id="userForm">

        <div class="form-group row">
            <label for="inputIntelligence" class="col-sm-2 col-form-label">Intelligence:</label>
            <div class="col-sm-10">
                <div class="range-slider">
                    <input class="myForm range-slider__range" name="intelligence" type="range" value="50" min="0" max="100">
                    <span id="inputIntelligence" class="range-slider__value">0</span>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputStrength" class="col-sm-2 col-form-label">Strength:</label>
            <div class="col-sm-10">
                <div class="range-slider">
                    <input class="myForm range-slider__range" name="strength" type="range" value="50" min="0" max="100">
                    <span id="InputStrength" class="range-slider__value">0</span>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputSpeed" class="col-sm-2 col-form-label">Speed:</label>
            <div class="col-sm-10">
                <div class="range-slider">
                    <input class="myForm range-slider__range" name="speed" type="range" value="50" min="0" max="100">
                    <span id="inputSpeed" class="range-slider__value">0</span>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label for="inputDurability" class="col-sm-2 col-form-label">Durability:</label>
            <div class="col-sm-10">
                <div class="range-slider">
                    <input class="myForm range-slider__range" name="durability" type="range" value="50" min="0" max="100">
                    <span id="inputDurability"  class="range-slider__value">0</span>
                </div>
            </div>
        </div>

        <div class="form-group row">
          <label for="inputName">Name:</label>
          <input type="text" class="myForm col-sm-10 form-control" id="inputName" name="name" placeholder="Your name">
        </div>

        <div class="form-group">
          <label for="inputBattleCry">Battle cry:</label>
          <input type="text" class="myForm col-sm-10 form-control" id="battleCry" name="battleCry" placeholder="Your battle cry!">
        </div>

        <div class="form-group row">
            <div class="col-sm-10">
                <button id="recordStats" class="btn btn-success btn-lg" role="button"record my stats!</a>
            </div>
        </div>
    </form>
    <p id="total"></p>
      <a id="finishCreation" class="btn btn-success btn-lg" href="/opponent" role="button">See opponent »</a>`
    )


    //getTotal
  // const createHumanPlayer = () => {
  //   const first = document.getElementById('value_range1').innerText
  //   const second = document.getElementById('value_range2').innerText
  //   const third = document.getElementById('value_range3').innerText
  //   const fourth = document.getElementById('value_range4').innerText
  //   const name = document.getElementById('vinputName').value
  //   const battleCry = document.getElementById('battleCry').value
  //   const randomPower = Math.round(Math.random() * 100)
  //   const randomCombat = Math.round(Math.random() * 100)
  //   return new HumanPlayer(first, second, third, fourth, randomPower, randomCombat, name, battleCry)
  // }


  // const getTotal = () => {
  //   console.log('coucou je suis dans getTotal')
  //     const total = document.getElementById('total')
  //     const intelligence = document.getElementById('value_range1').innerText
  //     const strength = document.getElementById('value_range2').innerText
  //     const speed = document.getElementById('value_range3').innerText
  //     const durability = document.getElementById('value_range4').innerText
  //     total.innerHTML = '' + (Number(intelligence) + Number(strength) + Number(speed) + Number(durability))
  // }


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
              //console.log(this.value)
              $(this).next(value).html(this.value)
              //getTotal()
            //  userStats = getTotal
              //console.log(playerHuman1)
          });
      });
      //return userStats
  };

    rangeSlider()


    const form = document.getElementById('userForm')
    form.addEventListener('submit', e => {
      e.preventDefault()
      const data = serializeForm(form)
      console.log('notre humain : ', data)
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
      
      </div>`)

    const callMyLink = () => {
      const url = `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json`;

      fetch(url)
        .then(reponse => {
          return reponse.json();
        })
        .then(result => {
          const playerHuman1 = new HumanPlayer(50, 70, 20, 67, 70, 60, 'Thomas', 'Fdsdf')
          console.log('je suis lhumain ', playerHuman1)
          const selectedHeroes = result.filter(hero => {
            //console.log('hero api', hero)
            const totalHero = hero.powerstats.intelligence + hero.powerstats.strength + hero.powerstats.speed + hero.powerstats.durability
            //console.log('comparaison: ', totalHero, playerHuman1.total)
            //console.log('notre total hero: ', totalHero)
            return totalHero < playerHuman1.total + 10 && totalHero > playerHuman1.total - 10
          })
          //Générer 3 computerPlayers aléatoires

          console.log('Résultat du filtre: ', selectedHeroes.length)
          const first = Math.floor(Math.random() * selectedHeroes.length) + 1
          const second = Math.floor(Math.random() * selectedHeroes.length) + 1
          const third = Math.floor(Math.random() * selectedHeroes.length) + 1

          let heroesArr = [selectedHeroes[first], selectedHeroes[second], selectedHeroes[third]]
          console.log('Je suis le tableau de 3 ', heroesArr)
          const heroesObjects = heroesArr.map(obj => new ComputerPlayer(obj.powerstats.intelligence, obj.powerstats.strength, obj.powerstats.speed, obj.powerstats.durability, obj.powerstats.power, obj.powerstats.combat, obj.name))
          const allOpponents = heroesArr. reduce((carry, opponent) => carry + makeOpponentCard(opponent, displayComputer), '')
          const displayCards = document.getElementById('opponentRow')
          displayCards.innerHTML = allOpponents
          // const firstOpponent = document.getElementById('first')
          // const secondOpponent = document.getElementById('second')
          // const thirdOpponent = document.getElementById('third')
          // displayPlayer(heroesObjects[0], firstOpponent)
          // displayPlayer(heroesObjects[1], secondOpponent)
          // displayPlayer(heroesObjects[2], thirdOpponent)





          // const htmlListThreeHeroes = document.getElementById('display')
          // htmlListThreeHeroes.innerHTML = listThreeHeroes


          //const opponentStats = result.powerstats;
          //const playerOpponent = new ComputerPlayer(opponentStats.intelligence, opponentStats.strength, opponentStats.speed, opponentStats.durability, opponentStats.power, opponentStats.combat, result.name)
          //const opponentTotal = opponentStats.intelligence + opponentStats.strength + opponentStats.speed + opponentStats.durability


          // const displayOpponent = document.getElementById('opponentCard');
          //displayPlayer(playerOpponent, displayOpponent)
          //random sur power et combat  les autres seront remplis par lutilisateur
          let human = '';

          const displayHuman = document.getElementById('display');
          displayPlayer(playerHuman1, displayHuman)
           
          //on ajoute random power et 100 en lifePoints

          //la boucle des différents tours
          
        })
    };
    callMyLink();
  },
  '/game' : () =>{
    render('<p>Now playing...wait 2 sec to see result alert</p>')
    setTimeout(() => alert('YOU WIN!!!'), 2000);

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



