
module.exports = {

  VERSION: "V1.1.0",

  bet_request: function(game_state) {
    
    var gs = JSON.parse(game_state);
    
    var hole_cards;
    var stack;
    var pre_flop = false;
    
    if (gs.community_cards.length === 0) {
      pre_flop = true;
    }
    
    console.log(pre_flop);
    
    for (var i = 0; i < gs.players.length; i++) {
      if (gs.players[i].hole_cards !== undefined) {
        hole_cards = gs.players[i].hole_cards;
        stack = gs.players[i].stack;
      }
    }
    
    console.log(hole_cards);
    
    var ranks =  [];
    
    for (var j = 0; j < hole_cards.length; j++) {
      ranks.push(hole_cards[j].rank);
    }
    
    console.log(ranks);
    
    var ranking = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    
    rank0 = 0;
    rank1 = 0;
    var pair = false;
    for (var i =0; i< ranking.length; i++) {
    	if (ranks[0] == ranking[i]) {
    		ranks0 = i;
    	}
    	if (ranks[1] == ranking[i]) {
    		ranks1 = i;
    	}
    }

    // switch
    if (rank0 < rank1) {
    	var temp = ranks[0];
    	ranks[0] = ranks[1];
    	ranks[1] = temp;
    } else if (rank0 == rank1) {
    	pair = true;
    }
    
    
    
    if (pre_flop && ( pair || ranks[0] == 'A') ) {
      return stack;
    }
    
    if (gs.small_blind*3 == gs.pot) {
      return gs.minimum_raise;
    } else {
      return 0;
    }
    
    
    
  },

  showdown: function(game_state) {

  }
};
