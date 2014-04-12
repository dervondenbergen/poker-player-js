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
    
  },
  
  getSCRanking: function (holeCards, siuted) {
    
    var hC = holeCards[0]+holeCards[1]+' ';
    
    var scr = [
      ['AA ',0 ,99999],
      ['KK ',0 ,477],
      ['QQ ',0 ,239],
      ['JJ ',0 ,159.6],
      ['TT ',0 ,119.9],
      ['99 ',0 ,95.7],
      ['88 ',0 ,79.6],
      ['77 ',0 ,67.4],
      ['66 ',0 ,57.7],
      ['55 ',0 ,49.3],
      ['44 ',0 ,41],
      ['33 ',0 ,32.7],
      ['22 ',0 ,24],
      ['AK ',277.3 ,165.9],
      ['AQ ',137.1 ,96.3],
      ['AJ ',91.6 ,68.2],
      ['AT ',69.5 ,53.1],
      ['A9 ',52.1 ,40.9],
      ['A8 ',44.9 ,35.5],
      ['A7 ',39.6 ,31.4],
      ['A6 ',35.4 ,28.1],
      ['A5 ',36.1 ,28.3],
      ['A4 ',33.3 ,26],
      ['A3 ',31.1 ,24.2],
      ['A2 ',29.1 ,22.6],
      ['KQ ',43.3 ,29.4],
      ['KJ ',36.3 ,25.4],
      ['KT ',31.4 ,22.5],
      ['K9 ',23.9 ,17.9],
      ['K8 ',20.0 ,15.2],
      ['K7 ',18.7 ,14.3],
      ['K6 ',17.4 ,13.3],
      ['K5 ',16.2 ,12.3],
      ['K4 ',15.1 ,11.4],
      ['K3 ',14.2 ,10.7],
      ['K2 ',13.4 ,10],
      ['QJ ',24.8 ,16.4],
      ['QT ',21.9 ,14.9],
      ['Q9 ',16.3 ,11.7],
      ['Q8 ',13.4 ,9.9],
      ['Q7 ',11.3 ,8.5],
      ['Q6 ',10.9 ,8.1],
      ['Q5 ',10.2 ,7.5],
      ['Q4 ',9.5 ,6.8],
      ['Q3 ',8.9 ,6.3],
      ['Q2 ',8.3 ,5.7],
      ['JT ',18.1 ,11.5],
      ['J9 ',12.9 ,8.9],
      ['J8 ',10.3 ,7.4],
      ['J7 ',8.6 ,6.3],
      ['J6 ',7.4 ,5.4],
      ['J5 ',7.0 ,5],
      ['J4 ',6.5 ,4.5],
      ['J3 ',6.0 ,4],
      ['J2 ',5.6 ,3.4]
    ];
    
    for (var i = 0; i < scr.length; i++) {
      if (hC == scr[i][0]) {
        if (siuted) {
          return scr[i][1];
        } else {
          return scr[i][2];
        }
      }
    }
    
    return 0;
    
  }  
};
