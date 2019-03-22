const { bookQuery } = require("./queryBooks");
const { heroQuery } = require("./queryHeros");

const querys = [bookQuery,heroQuery];

module.exports = {
  querys,
};