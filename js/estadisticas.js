/* .1. */
function estadisticas(matches) {
  /* 2 */ console.log(matches)
  var estadisticas = [];

  for (var i = 0; i < matches.length; i++) {
    /* .3. */ 
    if (matches[i].status != "FINISHED") {
      continue;
    }
    /* .4. */
    var id_homeTeam = matches[i].homeTeam.id;
    var name_homeTeam = matches[i].homeTeam.name;
    var goals_homeTeam = matches[i].score.fullTime.homeTeam;
    var foundHomeTeam;

    var id_awayTeam = matches[i].awayTeam.id;
    var name_awayTeam = matches[i].awayTeam.name;
    var goals_awayTeam = matches[i].score.fullTime.awayTeam;
    var foundAwayTeam;

    for (var b = 0; b < estadisticas.length; b++) {

      if (id_homeTeam == estadisticas[b].id) {
        foundHomeTeam = estadisticas[b];

      }
      if (id_awayTeam == estadisticas[b].id) {
        foundAwayTeam = estadisticas[b];
      }
    }
    if (id_homeTeam == 82){
        console.log(foundHomeTeam, foundAwayTeam);
    }
    if (foundHomeTeam == undefined) {
      let objeto = {
        id: id_homeTeam,
        name: name_homeTeam,
        goals: goals_homeTeam,
        matches: 1,
      };
      estadisticas.push(objeto);
    } else {
      foundHomeTeam.goals += goals_homeTeam;
      foundHomeTeam.matches++;
    }

    if (foundAwayTeam == undefined) {
      let objeto2 = {
        id: id_awayTeam,
        name: name_awayTeam,
        goals: goals_awayTeam,
        matches: 1,
      };
      estadisticas.push(objeto2);
    } else {
      foundAwayTeam.goals += goals_awayTeam;
      foundAwayTeam.matches++;
    }
    for (let c = 0; c < estadisticas.length; c++) {
      estadisticas[c].avg = estadisticas[c].goals / estadisticas[c].matches;
    }
  }

  console.log(estadisticas);
}
estadisticas(matches.matches);

function nuevatabla(estadisticas) {}
