const callMyLink = () => {
  const url = `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/` + "${functionRandom}"

  fetch(url)
    .then(reponse => {
      return reponse.json();
    })
    .then(result => console.log(result));
};
callMyLink();
