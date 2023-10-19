class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here

    this.shuffleCards()
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined
    } 
    let len = this.cards.length;
    while (len > 0) {
      len--;
      let temp = this.cards[len];
      let rdmInd = Math.floor(Math.random() * len);
      this.cards[len] = this.cards[rdmInd];
      this.cards[rdmInd] = temp;
    }
    return this.cards
    
  }
  
  checkIfPair(card1, card2) {

    this.pairsClicked++
    if (card1 === card2){
      this.pairsGuessed++
      return true
    } else {

      return false
    }

    
    // ... write your code here
  }

  checkIfFinished() {
    const totalPairs = this.cards.length / 2;
    if (this.pairsGuessed === totalPairs){
      
      return true
    }
    else{
      return false

    }
    // ... write your code here
  }
}
