// Access - Control - Allow - Origin *

const base = 'https://gateway.marvel.com'
const endpoint = '/v1/public/characters?name='
const apikey = config.PUBLIC_KEY
const privateKey = config.SECRET_KEY

const face = document.querySelector('#face')
const name = document.querySelector('#name')
const addl = document.querySelector('#addl')
const dropdown = document.querySelector('#dropdown')
const submit = document.querySelector('#submit')
const user_input = document.querySelector('user-input')

// example: http://gateway.marvel.com/v1/public/characters?name=${name}&ts=${ts}&apikey=${key}&hash=${hash}

async function populateDropDown() {
  try {
    const ts = new Date().getTime()
    const hash = md5(ts + privateKey + apikey)
    // Learned how to use md5 from a YouTuber named Junior Developer Central
    const list = await axios.get(`${base}/v1/public/characters&ts=${ts}&apikey=${apikey}&hash=${hash}`)
    let randomSelect = Math.floor(Math.random() * (list.length - 1))
    for (let i = 0; i < list.length; i++) {
      const option = document.createElement('option')
      option.value = list[i]
      option.innerText = list[i]
      if (i === randomSelect) {
        option.selected = true
      }
      dropdown.append(option)
    }
  } catch (error) {
    console.log(`Error: ${error}`)
    const option = document.createElement('option')
    option.value = ''
    option.innerText = "MODOK has destroyed the dropdown"
    dropdown.append(option)
  }
}

// populateDropDown()

async function getChar(name) {
  try {
    let ts = new Date().getTime()
    let hash = md5(ts + privateKey + apikey)
    const char = await axios.get(`${base}${endpoint}${name}&ts=${ts}&apikey=${apikey}&hash=${hash}`)
    // console.log(char.data.data.results[0])
    console.log(char)
  } catch (error) {
    console.log(`Error: ${error}.`)
  }
}

getChar('magneto')

// let button = document.querySelector("button")
// button.addEventListener('click', button.remove)
