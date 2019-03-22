const { booksResolvers } = require('./booksResolvers');
const { herosResolvers } = require('./herosResolvers');

const resolvers = [booksResolvers, herosResolvers];

module.exports = {
  resolvers,
};