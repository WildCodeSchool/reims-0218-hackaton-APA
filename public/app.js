const mainDiv = document.getElementById('main')

const render = html => {
  mainDiv.innerHTML = html
}

const controllers = {
  '/': () => {
    const test = '<p>Je teste ! :)</p>'
    render(test)
  }

}

const routing = () => {
  const routes = [
    '/',
    '/about',
    '/users/new',
    '/users/:slug',
    '/try',
    '/list-wilders',
    '/wilders/new',
    '*'
  ]
  routes.forEach(
    path => page(path, controllers[path])
  )
  page()
}

//appel cette fonction pour gérer les routes
routing()
