const team = {
  _players: [
    {
      firstName: "João",
      lastName: "Rebello de Andrade",
      age: 35,
      },
      {
      firstName: "Filipe",
      lastName: "Rebello de Andrade",
      age: 33,
      },
      {
      firstName: "Sebastian",
      lastName: "Rebello de Andrade",
      age: 22,        
      }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27,
    }, {
      opponent: 'Benfica',
      teamPoints: 3,
      opponentPoints: 2,      
    }, {
      opponent: 'Sporting',
      teamPoints: 2,
      opponentPoints: 1,      
    }
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    return this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,       
    };
    return this._games.push(game);
  },
}

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslia", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Porto", 2, 4);
team.addGame("Braga", 4, 1);
team.addGame("Guimarães", 5, 2);

console.log(team.players)
console.log(team.games)
