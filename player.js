
module.exports = {

  VERSION: "V1.0.1",

  bet_request: function(game_state) {
    var gs = JSON.parse(game_state);
    return gs.minimum_raise;
  },

  showdown: function(game_state) {

  }
};
