// Access - Control - Allow - Origin *

const base = 'https://gateway.marvel.com'
const endpoint = '/v1/public/characters?nameStartsWith='
const apikey = config.PUBLIC_KEY
const privateKey = config.SECRET_KEY

const face = document.querySelector('#face')
const name = document.querySelector('#name')
const addl = document.querySelector('#addl')
const buttonhaus = document.querySelector('#buttonhaus')
const events = document.querySelector('#events')
// const dropdown = document.querySelector('#dropdown')
const submit = document.querySelector('#submit')
const user_input = document.querySelector('#user-input')

// example: http://gateway.marvel.com/v1/public/characters?name=${name}&ts=${ts}&apikey=${key}&hash=${hash}

//Regrettably, I have confirmed that the API will not support a populated dropdown menu.

// async function populateDropDown() {
//   try {
//     const ts = new Date().getTime()
//     const hash = md5(ts + privateKey + apikey)
//     // Learned how to use md5 from a YouTuber named Junior Developer Central
//     const response = await axios.get(`${base}/v1/public/characters?orderBy=name&limit=100&ts=${ts}&apikey=${apikey}&hash=${hash}`)
//     const list = response.data.data.results
//     console.log(list)
//     let randomSelect = Math.floor(Math.random() * (list.length - 1))
//     for (let i = 0; i < list.length; i++) {
//       const option = document.createElement('option')
//       option.value = list[i].name
//       option.innerText = list[i].name
//       if (i === randomSelect) {
//         option.selected = true
//       }
//       dropdown.append(option)
//     }
//   } catch (error) {
//     console.log(`Error: ${error}`)
//     const option = document.createElement('option')
//     option.value = ''
//     option.innerText = "MODOK has destroyed the dropdown"
//     dropdown.append(option)
//   }
// }

// populateDropDown()

async function getChar(name) {
  try {
    user_input.value = ''
    const ts = new Date().getTime()
    const hash = md5(ts + privateKey + apikey)
    //     // Learned how to use md5 from a YouTuber named Junior Developer Central
    const response = await axios.get(`${base}${endpoint}${name}&limit=1&ts=${ts}&apikey=${apikey}&hash=${hash}`)
    const char = response.data.data.results[0]
    // console.log(char.id)
    newInfo(char)
  } catch (error) {
    console.log(`Error: ${error}`)
    alert("Failure. Try again. Hail Hydra")
    return
  }
}

function clearInfo() {
  while (face.lastChild) {
    face.lastChild.remove()
  }
  name.innerText = ''
  let addMinus = document.querySelector('#add')
  if (addMinus) {
    addMinus.remove()
  }
  let moreMinus = document.querySelector('#more')
  if (moreMinus) {
    moreMinus.remove()
  }
  while (events.lastChild) {
    events.lastChild.remove()
  }
  const labels = document.querySelectorAll(".label")
  labels.forEach(label => {
    label.remove()
  });
}

function checkAddFalse() {
  const add = document.querySelector('#add')
  add.disabled = false

}

function removeTeamMember(div) {
  checkAddFalse()
  div.remove()
}

function makeLeader(div) {
  let leader = document.querySelector("#leader")
  if (leader) {
    let make_leader = document.querySelector('#leader .make-leader')
    make_leader.disabled = false
    leader.removeAttribute('id')
  }
  div.id = 'leader'
  let leader_button = div.querySelector(".make-leader")
  leader_button.disabled = true
}

async function moreInfo(char, more) {
  const ts = new Date().getTime()
  const hash = md5(ts + privateKey + apikey)
  const response = await axios.get(`${base}/v1/public/characters/${char.id}/events?limit=100&ts=${ts}&apikey=${apikey}&hash=${hash}`)
  const eventList = response.data.data.results
  const eventLabel = document.createElement('p')
  eventLabel.className = "label"
  eventLabel.innerText = "Events:"
  addl.prepend(eventLabel)
  eventList.forEach(element => {
    const eventItem = document.createElement('li')
    eventItem.innerText = element.title
    events.append(eventItem)
  });
  more.disabled = true
}

function checkAdd(add) {
  let team = document.querySelectorAll("#team div")
  if (team.length === 5) {
    add.disabled = true
  }
}

function addChar(char, add) {
  let image = document.createElement('img')
  let src = (char.thumbnail.path + "." + char.thumbnail.extension)
  image.src = src
  let name = char.name
  let identity = document.createElement('p')
  identity.innerText = name
  let display = document.createElement('div')
  display.class = "team-member"
  display.append(image)
  display.append(identity)
  team.append(display)
  checkAdd(add)
  const remove = document.createElement('button')
  remove.innerText = "Remove"
  remove.class = "remove"
  display.append(remove)
  remove.addEventListener('click', () => {
    removeTeamMember(display)
  })
  const leader = document.createElement('button')
  leader.innerText = "Make Leader"
  leader.className = "make-leader"
  leader.addEventListener('click', () => {
    makeLeader(display)
  })
  display.append(leader)
}

function newInfo(char) {
  clearInfo()
  addl.style.display = "block"
  name.style.display = "block"
  let image = document.createElement('img')
  let src = char.thumbnail.path + "." + char.thumbnail.extension
  image.src = src
  name.innerText = char.name
  face.append(image)
  const add = document.createElement('button')
  add.id = "add"
  add.innerText = "Add to Team"
  add.addEventListener('click', () => {
    addChar(char, add)
  })
  checkAdd(add)
  const more = document.createElement('button')
  more.id = "more"
  more.innerText = "More info"
  more.addEventListener('click', () => {
    moreInfo(char, more)
  })
  buttonhaus.append(add)
  buttonhaus.append(more)
}

submit.addEventListener('submit', (e) => {
  e.preventDefault()
  getChar(user_input.value)
})
