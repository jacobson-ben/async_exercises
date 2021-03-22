const cardsToDraw = 1
let deckId;

async function cardDeck() {
  try {
    let shuffledDeck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    deckId = shuffledDeck.data.deck_id
  }
  catch(e) {
    console.log("There was an error loading the page")
  }
}


async function drawCard() {
  try {
    let card = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${cardsToDraw}`)
    let cardImage = card.data.cards[0].image
    $(".card-container").append(`<img src="${cardImage}"></img>`)
  }
  catch(e) {
    console.log("Failure to draw card.")
  }
}


$("#draw-card").on("click", drawCard)
cardDeck()