// cards of the game
var cards = ['queen', 'queen', 'king', 'king'];

// cards in play
var cardsInPlay = [];

// find the board, set it to a variable
// so we can add cards to it
var board = document.getElementById('game-board');

// create the board
var createBoard = function() {
  //loop through cards to create card elements for board
  for (var i = 0; i < cards.length; i++) {
    // create div which will be used as a card
    var cardElement = document.createElement('div');
    // add class to card for link styling
    cardElement.className = 'card';
    // set the card's 'data-card' to be the element of the array
    // data-attributes store data about an element not tied to a style
    // i.e. king or queen
    cardElement.setAttribute('data-card', cards[i]);
    // when a card is clicked, isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards);
    // append card to board
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }
};

// check if there are cards in play
var isTwoCards = function() {
  // add card to array of cards being viewed
  // 'this' refers to whatever called the function
  // 'this' gives access to cardElement clicked
  cardsInPlay.push(this.getAttribute('data-card'));
    // show the card's image
    console.log(this.getAttribute('data-card'));
    if (this.getAttribute('data-card') === 'king') {
      this.innerHTML = "<img src='king.jpg'>"; // king
    } else {
      this.innerHTML = "<img src='queen.jpg'>"; //queen
    }
  // if there are 2 cards in play, check for a match
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }
};

var isMatch = function(cards) {
  if (cards[0] === cards[1]) {
    alert('You found a match!');
  } else {
    alert('Try again!');
  }
};

createBoard();