/*
Deck
- Array of 52 cards
- shuffle method
- include jokers method
- giveCard method (decrement from deck)

Card
- number
- color
- suit

Person
- array or cards <Hand>
- get sum of cards
- getAceChoice method

AbstractValue10Class
- contains all 10, J, Q, K
- number is 10

Pot
- all the throw away cards
- have limit on pot quantity -> if exceeds threshold put into deck, then shuffle

special cases: 
_ Ace being 1 or 11
_ Joker being included
*/

class Deck {
  constructor() {
    this.deck = [];
    let colorMap = {diamonds: 'red', hearts: 'red', spades: 'black', clubs: 'black'}
    // insertNumericCards()
    // insertRoyalCards()
    
  }
}

class Card {
  constructor(name, suit, color) {
    this.name = name;
    this.suit = suit;
    this.color = color;
  }
}
