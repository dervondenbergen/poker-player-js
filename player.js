
module.exports = {

  VERSION: "V1.1.1",

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
    //              0   1   2   3   4   5   6   7   8    9   10  11  12
    var ranking = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    
    rank0 = 0;
    rank1 = 0;
    var pair = false;
    for (var i =0; i< ranking.length; i++) {
    	if (ranks[0] == ranking[i]) {
    		rank0 = i;
    	}
    	if (ranks[1] == ranking[i]) {
    		rank1 = i;
    	}
    }

    // switch
    if (rank0 < rank1) {
    	var temp = rank0;
    	rank0 = rank1;
    	rank1 = temp;
    } else if (rank0 == rank1) {
    	pair = true;
    }
    
    console.log(pair);
    console.log(rank0);
    console.log(rank1);
    
    var confidence = 0;
    
    if (pre_flop) {
      if ( pair ) {
        if (rank0 > 8) {
          confidence = 100;
        } else if (rank0 > 6) {
          confidence = 50;
        }
        
        
      } else  {// no pair
        if (rank0 == 12) {
          if (rank1 > 9) {
            confidence = 100;
          } else if (rank1 > 7) {
            confidence = 50;
          }
        }
      }
    }
    
    var raised = false;


    if (gs.small_blind*3 < gs.pot) {
      raised = true;
    }
    
    if (confidence == 100 || (confidence >= 50 && !raised)) {
      return stack;
    } else {
      return 0;
    }
    
  },

  showdown: function(game_state) {

  }
};
