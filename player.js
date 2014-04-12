
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state) {
    var gs = JSON.parse(game_state);
    return gs.minimum_raise;
  },

  showdown: function(game_state) {

  }
};
