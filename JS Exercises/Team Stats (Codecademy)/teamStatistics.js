let team = {
    // Array of objects-players
    _players: [{firstName: 'Thomas', lastName: 'Boufikos', age: 20},
              {firstName: 'Diego', lastName: 'Maradona', age: 50},
              {firstName: 'Cristiano', lastName: 'Ronaldo', age: 35}],
    
    _games: [{opponent: 'Bayern', teamPoints: 60, opponentPoints: 50},
            {opponent: 'Chelsea', teamPoints: 80, opponentPoints: 40},
            {opponent: 'Real Madrid', teamPoints: 45, opponentPoints: 25},
            ],
    
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    
    addPlayer(firstName, lastName, age){
      let player = {
        firstName,
        lastName,
        age
      };
      this.players.push(player);
    },
    
    addGame(opponent, teamPoints, opponentPoints){
      let game = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this.games.push(game);
    }
  };
  
  // MAIN FUNCTION
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  console.log();
  team.addGame('Olympiacos', 80, 70);
  team.addGame('Juventus', 60, 55);
  team.addGame('Tottenham', 50, 60);
  console.log(team.games);
  