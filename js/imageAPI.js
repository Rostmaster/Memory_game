let offsets = []

let getHarryImage = async () => {
  let offset = 0
  while (offsets.includes(offset)) offset = Math.floor(Math.random() * 25)
  offsets.push(offset)
  let response = await fetch(`https://hp-api.onrender.com/api/characters/`, {
    mode: 'cors'
  })

  let data = await response.json()

  return data[offset].image
}

let getDogImage = async () => {

  let response = await fetch(`https://dog.ceo/api/breeds/image/random`, {mode: 'cors'})

  let data = await response.json()

  return data.message
}

let getCountryFlag = async () => {

  let response = await fetch(`https://flagsapi.com/BE/flat/64.png`, {mode: 'cors'})

  let data = await response.json()

  return data.message
}
