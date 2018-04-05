const mainDiv = document.getElementById('main')

const render = html => {
  mainDiv.innerHTML = html
}

const controllers = {
  '/': () => {
    console.log("je suis dans la route/")
    const test = '<p>Je teste ! :)</p>'
    render(test)
  },
  '*': () => render('<h1>Not Found</h1>')

}

const routing = () => {
  const routes = [
    '/',
    '*'
  ]
  routes.forEach(
    path => page(path, controllers[path])
  )
  page()
}

//appel cette fonction pour gérer les routes
routing()
