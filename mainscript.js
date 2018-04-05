const randomOpponent = Math.round(Math.random() * 570) + 1;

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
    super(intelligence, strength, speed, durability, power, combat);
    (this.name = name), (this.battleCry = battleCry);
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

//Appel à l'API
const callMyLink = () => {
  const url = `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/3.json`;

  fetch(url)
    .then(reponse => {
      return reponse.json();
    })
    .then(result => {
      console.log(result);
      const opponentStats = result.powerstats;

      console.log(opponentStats);
      //const opponent = opponentStats.reduce(((acc, carry) =>  acc + carry), '')
      let opponent = "";
      const keysOpponent = Object.keys(opponentStats);
      for (let key of keysOpponent) {
        opponent += `<li>${key} : ${opponentStats[key]}</li>`;
      }
      //console.log(opponent)
      const displayOpponent = document.getElementById("opponentCard");
      displayOpponent.innerHTML = opponent;

      let human = "";
      const playerHuman = new Player(
        "Hubert de Montmirail",
        34,
        66,
        55,
        74,
        "Monjoie! Saint Denis!"
      );
      const keysHuman = Object.keys(playerHuman.stats);
      for (let key of keysHuman) {
        human += `<li>${key} : ${playerHuman.stats[key]}</li>`;
      }
      const displayHuman = document.getElementById("humanCard");
      displayHuman.innerHTML = human;

      //la boucle des différents tours
    });
};
callMyLink();
