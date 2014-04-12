var fn = require('./functions.js');

module.exports = {

  VERSION: "V1.2.2",

  bet_request: function(game_state) {
    
    var gs = JSON.parse(game_state);
    
    var hole_cards = [];
    var stack;
    var pre_flop = false;
    var community_cards = []; 
    var currentBet =0;
    var callAmount =0;
    var pair = false;
    if (gs.community_cards.length === 0) {
      pre_flop = true;
    }
    
    console.log('is pref lop: '+pre_flop);
    
    
    for (var i = 0; i < gs.players.length; i++) {
      if (gs.players[i].hole_cards !== undefined) {
        for (var j = 0; j < gs.players[i].hole_cards.length; j++) {
          hole_cards.push(gs.players[i].hole_cards[j].rank);
        }
        
        stack = gs.players[i].stack;
        currentBet = gs.players[i].bet;
        callAmount = gs.current_buy_in - currentBet; 
      }
    }
    
    for (var i = 0; i < gs.community_cards.length; i++) {
      community_cards.push(gs.community_cards[i].rank);
    }
    
    console.log('hole cards: '+hole_cards);
    var rank = [];
    
    rank.push(fn.getRank(hole_cards[0]));
    rank.push(fn.getRank(hole_cards[1]));

    // switch
    if (rank[0] < rank[1]) {
    	var temp = rank[0];
    	rank[0] = rank[1];
    	rank[1] = temp;
    } else if (rank[0] == rank[1]) {
    	pair = true;
    }
    
    var confidence = fn.confidence(pair, rank);
    
    var raised = false;
    if (gs.small_blind*3 < gs.pot) {
      raised = true;
    }
    
    console.log('pair: ' +pair);
    console.log('confidence: '+confidence);
    console.log('was raised: '+raised);
    
    var betAmount = 0;
    
    
    if (pre_flop) {
      if (confidence == 100  && raised) {
        betAmount = stack;
      } else if (confidence == 100 || (confidence >= 50 && !raised)) {
        betAmount = gs.minimum_raise*3;
      } else if (confidence >= 50){
        betAmount = callAmount;
      }
    } else { // post flop
      var flopped_pair = fn.getPair(community_cards, hole_cards);
      var has_flopped_pair = flopped_pair.length >= 2;
      console.log('has flopped pair: '+has_flopped_pair);
      if ( (flopped_pair.length >= 2 && fn.getRank(flopped_pair[0]) > 9) || ( pair && rank[0] > 10 ) ) {
        betAmount = stack;
      }
    }
    
    console.log('betting: '+betAmount);
    console.log('-------------');
    return betAmount;
    
    
  },

  showdown: function(game_state) {

  }
};
