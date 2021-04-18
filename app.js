document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [
      {
        name: "fries",
        imgSrc: "images/fries.png",
      },
      {
        name: "fries",
        imgSrc: "images/fries.png",
      },
      {
        name: "hotdog",
        imgSrc: "images/hotdog.png",
      },
      {
        name: "hotdog",
        imgSrc: "images/hotdog.png",
      },
      {
        name: "ice-cream",
        imgSrc: "images/ice-cream.png",
      },
      {
        name: "ice-cream",
        imgSrc: "images/ice-cream.png",
      },
      {
        name: "milkshake",
        imgSrc: "images/milkshake.png",
      },
      {
        name: "milkshake",
        imgSrc: "images/milkshake.png",
      },
      {
        name: "pizza",
        imgSrc: "images/pizza.png",
      },
      {
        name: "pizza",
        imgSrc: "images/pizza.png",
      },
      {
        name: "cheeseburger",
        imgSrc: "images/cheeseburger.png",
      },
      {
        name: "cheeseburger",
        imgSrc: "images/cheeseburger.png",
      },
    ];

    let score = 0;
    document.querySelector("#result").textContent = score;
    let flippedCards = [];
    const grid = document.querySelector('.grid');
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', './images/blank.png');
            card.setAttribute('id', 'img'+i);
            card.setAttribute('data-name', cardArray[i].name);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        const cardId = this.getAttribute('id');
        const cardName = this.getAttribute('data-name');
        flippedCards.push({id: cardId, name: cardName});
        this.setAttribute('src', cardArray[cardId.substr(3)].imgSrc);

        if (flippedCards.length === 2 && flippedCards[0].name === flippedCards[1].name) {
          setTimeout(() => alert('bingo'), 300);
          const card1 = document.getElementById(flippedCards[0].id);
          const card2 = document.getElementById(flippedCards[1].id);
          setTimeout(() => {
              card1.setAttribute("src", "./images/white.png");
              card2.setAttribute("src", "./images/white.png");
          }, 500);
          
          score++;
          document.querySelector('#result').textContent = score;
          flippedCards = [];

        } else if (flippedCards.length === 2){
            setTimeout(() => alert("oops"), 500);
            const card1 = document.getElementById(flippedCards[0].id);
            const card2 = document.getElementById(flippedCards[1].id);
            setTimeout(() => {
                 card1.setAttribute("src", "./images/blank.png");
                 card2.setAttribute("src", "./images/blank.png");
            }, 500);
           
            flippedCards = [];
        } 
        
        if (score ===  6) {
            setTimeout(() => {
                alert('Congratulations!!!');
                const allCards = document.querySelectorAll("img");
                allCards.forEach((card) => (card.src = "./images/blank.png"));
                document.querySelector("#result").textContent = 0;
            }, 800);
            
        }

    }

    createBoard();
})