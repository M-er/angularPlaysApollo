const { Herro } = require("../models");

const herosResolvers = {
  Query: {
    heros: () => Herro.all(),
  },
};

module.exports = {
  herosResolvers,
}