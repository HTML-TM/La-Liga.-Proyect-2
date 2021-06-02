estadisticasFetch();
function estadisticasFetch() {
  const url = "https://api.football-data.org/v2/competitions/2014/matches";
  fetch(url, {
    method: "GET",
    headers: {
      "X-Auth-Token": "6aacce9863cb44628022e0835d68f993",
    },
  })
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((data) => {
      const matchess = data.matches;
      

      let loader = document.getElementById("loader");
      loader.style.display = "none";
      crearEstadisticas(data.matches);
      crearEstadisticas2(data.matches);
    });
}



function crearEstadisticas(matches) {
  var statistics = [];

  matches.forEach(match => {
    if (match.status !== "FINISHED") return;

    let homeFound = statistics.find(team => team.id == match.homeTeam.id);

    if (!homeFound) {
        statistics.push({
            id: match.homeTeam.id,
            name: match.homeTeam.name,
            goals: match.score.fullTime.homeTeam,
            matches: 1
        });
    }
    else {
        homeFound.goals += match.score.fullTime.homeTeam,
            homeFound.matches++;
    }

    let awayFound = statistics.find(team => team.id == match.awayTeam.id);

    if (!awayFound) {
        statistics.push({
            id: match.awayTeam.id,
            name: match.awayTeam.name,
            goals: match.score.fullTime.awayTeam,
            matches: 1
        });
    }
    else {
        awayFound.goals += match.score.fullTime.awayTeam,
            awayFound.matches++;
    }

});

statistics.forEach(team => {
    team.avg = (team.goals / team.matches);
});

console.log(statistics);
  nuevatabla(statistics);
}

function nuevatabla(estadisticas) {
  var tbody = document.getElementById("tablebody3");

  estadisticas.sort((a, b) => b.avg - a.avg);
  for (var h = 0; h < 5; h++) {
    var fila1 = document.createElement("tr");

    var name = document.createElement("td");
    name.textContent = estadisticas[h].name;
    fila1.appendChild(name);

    var goles = document.createElement("td");
    goles.textContent = estadisticas[h].goals;
    fila1.appendChild(goles);

    var partidos = document.createElement("td");
    partidos.textContent = estadisticas[h].matches;
    fila1.appendChild(partidos);

    var media = document.createElement("td");
    media.textContent = estadisticas[h].avg.toFixed(2);
    fila1.appendChild(media);

    tbody.appendChild(fila1);
  }
}

function crearEstadisticas2(matches) {
  estadisticas2 = [];

  for (var h = 0; h < matches.length; h++) {
    if (matches[h].status != "FINISHED") {
      continue;
    } 
    var id_awayTeam = matches[h].awayTeam.id;
    var name_awayTeam = matches[h].awayTeam.name;
    var goals_homeTeam = matches[h].score.fullTime.homeTeam;

    var foundAwayTeam;
    
   
    for (var y = 0; y < estadisticas2.length; y++) {
      if (name_awayTeam == estadisticas2[y].name) {
        foundAwayTeam = estadisticas2[y];
      }
    }

    if (foundAwayTeam == undefined) {
      let objeto3 = {
        id: id_awayTeam,
        name: name_awayTeam,
        goals: goals_homeTeam,
        matches: 1,
      };
      estadisticas2.push(objeto3);
    } else {
      foundAwayTeam.goals += goals_homeTeam;
      foundAwayTeam.matches++;
    }
  }
  console.log(estadisticas2)
  nuevatabla2(estadisticas2);
}

function nuevatabla2(estadisticas2) {
  var tbody = document.getElementById("tablebody4");

  estadisticas2.sort((a, b) => a.goals - b.goals);

  for (var h = 0; h < 5; h++) {
    var fila2 = document.createElement("tr");

    var name = document.createElement("td");
    name.textContent = estadisticas2[h].name;
    fila2.appendChild(name);

    var partidos = document.createElement("td");
    partidos.textContent = estadisticas2[h].matches;
    fila2.appendChild(partidos);

    var goles = document.createElement("td");
    goles.textContent = estadisticas2[h].goals;
    fila2.appendChild(goles);

    tbody.appendChild(fila2);
  }
}


/* Adding and Deleting Elements */

/* document.replaceChild(new, old)	Replace an HTML element */

/* añadir mi nueva tabla con los datos de Ganados y poner la tabla anterior */


