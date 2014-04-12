module.exports = {
  
  confidence: function (pair, rank) {
    
    if ( pair ) {
      if (rank[0] > 7) {
        return 100;
      } else if (rank[0] > 5) {
        return 50;
      }
      
      
    } else  {// no pair
      if (rank[0] == 12) {
        if (rank[1] > 8) {
          return 100;
        } else if (rank[1] > 6) {
          return 50;
        }
      } else if (rank[0] == 11) {
        if (rank[1] > 9) {
          return 75;
        } else if (rank[1] > 7) {
          return 50;
        }
      }
    }
    
    return 0;
    
  },
  
  getPair: function (communityCards, holeCards) {
    
    var pair = [];
    for (var hole = 0; hole<2; hole++ ) {
    	for (var com = 0; com < communityCards.length; com++) {
    		if (holeCards[hole].toString() == communityCards[com].toString()) {
    			console.log('found pair');
          pair.push(holeCards[hole].toString());
          pair.push(communityCards[com].toString());
          return pair;
    		}
    	} 
    }
    
    return pair;
    
  },
  
  getRank: function (rank) {
    
    var ranking = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    
    for (var i =0; i< ranking.length; i++) {
      if (rank == ranking[i]) {
        return i;
      }
    }
    
  }
  
};
