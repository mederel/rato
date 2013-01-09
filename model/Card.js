/**
 * @fileOverview contains a model for a card in the card game
 */

/**
 * @class a card model object
 * @constructor
 * @param {Number} color the color of the card
 * @param {Number} level the level of the card
 */
function Card(color, level) {
  this._color = color;
  this._level = level;
};



Card.Color = {
  SPADES : 0,
  HEARTS : 1,
  DIAMONDS : 2,
  CLUBS : 3,
  ATOUT:4
};

Card.Level = {
    Jack : 10,
    Knight : 11,
    Queen : 12,
    King : 13
};