/**
 * @fileOverview the code defines a class for handling card decks
 */

function CardDeck() {
  this._cards = [];
  
  
  
};

CardDeck.prototype.initCards = function() {
  $.each(Card.Color, function(key, value) {
    var maxLevel = 14;
    if (value == Card.Color.ATOUT) {
      maxLevel = 22;
    }
    for (var level = 0 ; level<maxLevel ; level++) {
      this._cards.push(new Card(value, level)); 
    }
  });
};