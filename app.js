const base = 'https://gateway.marvel.com'
const endpoint = '/v1/public/characters?name='
const apikey = config.PUBLIC_KEY
const privateKey = config.SECRET_KEY

// example: http://gateway.marvel.com/v1/public/characters?name=${name}&ts=${ts}&apikey=${key}&hash=${hash}

let button = document.querySelector("button")
button.addEventListener('click', button.remove)
