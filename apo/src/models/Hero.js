const { heros } = require("../data/heros.js");

class Hero {
  static all() {
    return heros;
  }
}
