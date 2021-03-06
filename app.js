// Global variables

const base = 'https://gateway.marvel.com'
const endpoint = '/v1/public/characters?nameStartsWith='
const apikey = config.PUBLIC_KEY
const privateKey = config.SECRET_KEY

// Global elements

const face = document.querySelector('#face')
const name = document.querySelector('#name')
const addl = document.querySelector('#addl')
const buttonhaus = document.querySelector('#buttonhaus')
const events = document.querySelector('#events')
const submit = document.querySelector('#submit')
const user_input = document.querySelector('#user-input')
const nav_top = document.querySelector('#nav-top')
const nav_team = document.querySelector('#nav-team')

// Independent listener events

nav_top.addEventListener('click', () => document.location='#left')
nav_team.addEventListener('click', () => document.location='#team')

// example: http://gateway.marvel.com/v1/public/characters?name=${name}&ts=${ts}&apikey=${key}&hash=${hash}

// Gets info from the database, based on user input, and calls the function to display the info.
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

// Removes any info from the display, if there is any
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

// If the team is full, disables the current 'add' button.
function checkAdd(add) {
  let team = document.querySelectorAll("#team div")
  if (team.length === 5) {
    add.disabled = true
  }
}

// Enables add button. No check since this function should only ever get called when that's safe.
function checkAddFalse() {
  const add = document.querySelector('#add')
  add.disabled = false
}

// Enables the add function, since there will axiomatically be room for another character now, and then removes the character.
function removeTeamMember(div) {
  checkAddFalse()
  div.remove()
}

// Checks if there is a current leader, and if so, deposes them. Either way, makes character leader.
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

// Gets Event info based on the character and displays it
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
  // Can't get more info twice for the same character.
  more.disabled = true
}

// Places current character on team
function addChar(char, add) {
  // Creates properties for the image and name, displays them in Team section.
  let image = document.createElement('img')
  image.src = (char.thumbnail.path + "." + char.thumbnail.extension)
  let identity = document.createElement('p')
  identity.innerText = char.name
  let display = document.createElement('div')
  display.className = "team-member"
  display.append(image)
  display.append(identity)
  team.append(display)
  // Checks if the team is full
  checkAdd(add)
  // Creates and adds buttons for team functions.
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

// Displays the info of the selected character
function newInfo(char) {
  // First removes previous info
  clearInfo()
  // Because default display is none
  addl.style.display = "block"
  name.style.display = "block"
  // Create the elements and display them
  let image = document.createElement('img')
  image.src = char.thumbnail.path + "." + char.thumbnail.extension
  name.innerText = char.name
  face.append(image)
  // Create and append buttons
  const add = document.createElement('button')
  add.id = "add"
  add.innerText = "Add to Team"
  add.addEventListener('click', () => {
    addChar(char, add)
  })
  // Check if team is full
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

// Turn the key in the ignition and let the motor roar!
submit.addEventListener('submit', (e) => {
  e.preventDefault()
  getChar(user_input.value)
})
