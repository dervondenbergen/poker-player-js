
module.exports = {

  VERSION: "V1.0.2",

  bet_request: function(game_state) {
    
    
    var gs = JSON.parse(game_state);
    
    if (gs.small_blind*3 <= gs.pot) {
      return gs.minimum_raise;
    } else {
      return 0;
    }
    
    
    
  },

  showdown: function(game_state) {

  }
};
