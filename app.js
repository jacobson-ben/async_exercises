async function getNumbers(...args) {
  try {
  resp = await axios.get(`http://numbersapi.com/${args}`);
  data = resp.data
  appendToPage(data)
  }
  catch(e) {
    "There is an error"
  }
}

function appendToPage(data) {
  for(const key in data) {
    $("ul").append(`<li>${key}: ${data[key]}</li>`)
  }
}

async function getNumbers2(num) {
  let baseURL = "http://numbersapi.com";

  let numbers = await Promise.all([ 
    axios.get(`${baseURL}/${num}?json`),
    axios.get(`${baseURL}/${num}?json`),
    axios.get(`${baseURL}/${num}?json`),
    axios.get(`${baseURL}/${num}?json`)])
  
  console.log(numbers)

  for(let i = 0; i < 4; i++) {
    $("ul").append(`<li>${numbers[i].data.text}</li>`)
  }
}
