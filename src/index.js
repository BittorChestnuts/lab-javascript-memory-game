const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML -  pone las cartas
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here

      const clickedScore = document.querySelector("#pairs-clicked")
      const guessedScore = document.querySelector("#pairs-guessed")

        card.classList.add("turned")
      memoryGame.pickedCards.push(card)

      if (memoryGame.pickedCards.length === 2) {
        const firstCard = memoryGame.pickedCards[0]
        const secondCard = memoryGame.pickedCards[1]

        const firstCartName = firstCard.getAttribute("data-card-name")
        const secondCartName = secondCard.getAttribute("data-card-name")

        const areTheyPairs = memoryGame.checkIfPair(firstCartName, secondCartName)

        if (areTheyPairs) {
          console.log("IT PAIRS");
        }
        else {
          setTimeout(() => {
            firstCard.classList.toggle("turned")
            secondCard.classList.toggle("turned")
          }, 1000)
          console.log("NOT PAIRS");

        }
      
        memoryGame.pickedCards = []
        clickedScore.innerText = `${memoryGame.pairsClicked}`
        guessedScore.innerText = `${memoryGame.pairsGuessed}`

        if (memoryGame.checkIfFinished()){
          alert("Congrats")
        }
      }




      console.log(`Card clicked: ${card}`);
    });
  });
});
