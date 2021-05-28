estadisticasFetch()
function estadisticasFetch() {
    const url = "https://api.football-data.org/v2/competitions/2014/matches"
    fetch(url,{
        method : "GET",
        headers:{
            "X-Auth-Token" : "6aacce9863cb44628022e0835d68f993"
        }
    }).then(response => {
        if(response.ok) return response.json();
    }).then(data => {
      let loader = document.getElementById("loader");
        loader.style.display = "none";
        crearEstadisticas(data.matches);
        crearEstadisticas2(data.matches);
    })
}
let equipo_search = document.getElementById(selector);
console.log(selector)

function crearEstadisticas(matches) {
  var estadisticas = []; 

  for (var i = 0; i < matches.length; i++) {
    if (matches[i].status != "FINISHED") {
      continue;
    }

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

  nuevatabla(estadisticas);
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
      if (id_awayTeam == estadisticas2[y].id) {
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
