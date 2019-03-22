const { bookQuery } = require("./querys/queryBooks");
const { heroQuery } = require("./querys/queryHeros");
const { bookType } = require("./types/bookType");
const { heroType } = require("./types/heroType");

//const { querys } = require("./querys");
//const { types } = require("./types");

const typeDefs = [bookQuery, heroQuery, bookType, heroType];

module.exports = {
  typeDefs,
};