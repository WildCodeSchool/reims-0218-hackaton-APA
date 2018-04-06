


//Définition des classes
//Class Player
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
    console.log("original: ", this.stats.power);
    console.log("ability?", ability, this.stats[ability]);
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
const displayPlayer = (obj, element) => {
  let list = "";
  console.log("onva display:", obj.name)
  list += `<li>name: ${obj.name}</li>`
  const keys = Object.keys(obj.stats)
  console.log("nos clés: ", keys)
  for (let key of keys) {
    list += `<li>${key} : ${obj.stats[key]}</li>`
  }
  element.innerHTML = list
}

//on veut le total des 4 caractéristiques intelligence, strength, speed et durability
//Faire la somme des 4 curseurs
const getTotal = () => {
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
      //console.log(this.value)
      $(this).next(value).html(this.value)
      getTotal()
    });
  });
};
rangeSlider()

//on construit un obj humain
//const playerHuman = new HumanPlayer(inputIntelligence, inputStrength, inputSpeed, inputDurability, power, combat, name, battleCry)
//nos stats
const playerHuman = new HumanPlayer(50, 70, 20, 67, 70, 60, "Thomas", "Fdsdf")

//Appel à l'API
const callMyLink = () => {
  const url = `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json`;

  fetch(url)
    .then(reponse => {
      return reponse.json();
    })
    .then(result => {
      console.log(result.length)
      const selectedHeroes = result.filter(hero => {
        //console.log("hero api", hero)
        const totalHero = hero.powerstats.intelligence + hero.powerstats.strength + hero.powerstats.speed + hero.powerstats.durability
        //console.log("comparaison: ", totalHero, playerHuman.total)
        //console.log("notre total hero: ", totalHero)
        return totalHero < playerHuman.total + 10 && totalHero > playerHuman.total - 10
      })
      //Générer 3 computerPlayers aléatoires

      console.log("Résultat du filtre: ", selectedHeroes.length)
      const first = Math.floor(Math.random() * selectedHeroes.length) + 1
      const second = Math.floor(Math.random() * selectedHeroes.length) + 1
      const third = Math.floor(Math.random() * selectedHeroes.length) + 1

      let heroesArr = [selectedHeroes[first], selectedHeroes[second], selectedHeroes[third]]
      console.log(heroesArr[0])
      const heroesObjects = heroesArr.map(obj => new ComputerPlayer(obj.powerstats.intelligence, obj.powerstats.strength, obj.powerstats.speed, obj.powerstats.durability, obj.powerstats.power, obj.powerstats.combat, obj.name))

      const firstOpponent = document.getElementById("first")
      const secondOpponent = document.getElementById("second")
      const thirdOpponent = document.getElementById("third")
      displayPlayer(heroesObjects[0], firstOpponent)
      displayPlayer(heroesObjects[1], secondOpponent)
      displayPlayer(heroesObjects[2], thirdOpponent)



      const htmlListThreeHeroes = document.getElementById('display')
      htmlListThreeHeroes.innerHTML = listThreeHeroes


      //const opponentStats = result.powerstats;
      //const playerOpponent = new ComputerPlayer(opponentStats.intelligence, opponentStats.strength, opponentStats.speed, opponentStats.durability, opponentStats.power, opponentStats.combat, result.name)
      //const opponentTotal = opponentStats.intelligence + opponentStats.strength + opponentStats.speed + opponentStats.durability


      // const displayOpponent = document.getElementById("opponentCard");
      //displayPlayer(playerOpponent, displayOpponent)
      //random sur power et combat  les autres seront remplis par l'utilisateur
      let human = "";

      const displayHuman = document.getElementById("humanCard");
      displayPlayer(playerHuman, displayHuman)

      //la boucle des différents tours
    })
};
callMyLink();

