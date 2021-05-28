partidosFetch()
function partidosFetch() {
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
        partidos(data.matches)
        
    })
}





function partidos (matches) {

var tbody = document.getElementById("tablebody")

    for (var g = 0; g < matches.length; g++) {
    var fila = document.createElement("tr");

        var fecha = matches[g].utcDate;
        var tiempo = document.createElement("td");
        tiempo.innerHTML = new Date(fecha).toLocaleString();
        fila.appendChild(tiempo);

        var equipolocal = document.createElement("td");
        equipolocal.innerText = matches[g].homeTeam.name;
        equipolocal.className="casatext"
        fila.appendChild(equipolocal);

        var esclocal = document.createElement("td");
        var imglocal = document.createElement("img");
        imglocal.setAttribute("src", "https://crests.football-data.org/" + matches[g].homeTeam.id + ".svg");
        imglocal.className="escudo";
        esclocal.appendChild(imglocal);
        fila.appendChild(esclocal);
        
        var resultado = document.createElement("td");
        if(matches[g].score.fullTime.homeTeam == null ){
            resultado.textContent = "Próx."
        }
        else {
            resultado.textContent = matches[g].score.fullTime.homeTeam + " - " + matches[g].score.fullTime.awayTeam;
        }
        resultado.className="resultadotext";
        fila.appendChild(resultado);
        

        var escvisitante = document.createElement("td");   
        var imgvisitante = document.createElement("img");
        imgvisitante.setAttribute("src", "https://crests.football-data.org/" + matches[g].awayTeam.id + ".svg");
        imgvisitante.className="escudo"
        escvisitante.appendChild(imgvisitante);
        fila.appendChild(escvisitante);

        var visitante = document.createElement("td");
        visitante.textContent = matches[g].awayTeam.name;
        fila.appendChild(visitante)

    tbody.append(fila);

    } 
}

