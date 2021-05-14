
var tbody = document.getElementById("tablebody")



    for (var g = 0; g < matches.matches.length; g++) {
    var fila = document.createElement("tr");

        var fecha = matches.matches[g].utcDate;
        var tiempo = document.createElement("td");
        tiempo.innerHTML = new Date(fecha).toLocaleString();
        fila.appendChild(tiempo);

        var equipolocal = document.createElement("td");
        equipolocal.innerText = matches.matches[g].homeTeam.name;
        equipolocal.className="casatext"
        fila.appendChild(equipolocal);

        var esclocal = document.createElement("td");
        var imglocal = document.createElement("img");
        imglocal.setAttribute("src", "https://crests.football-data.org/" + matches.matches[g].homeTeam.id + ".svg");
        imglocal.className="escudo";
        esclocal.appendChild(imglocal);
        fila.appendChild(esclocal);
        
        var resultado = document.createElement("td");
        if(matches.matches[g].score.fullTime.homeTeam == null ){
            resultado.textContent = "Prox."
        }
        else {
            resultado.textContent = matches.matches[g].score.fullTime.homeTeam + " - " + matches.matches[g].score.fullTime.awayTeam;
        }
        resultado.className="resultadotext";
        fila.appendChild(resultado);
        

        var escvisitante = document.createElement("td");   
        var imgvisitante = document.createElement("img");
        imgvisitante.setAttribute("src", "https://crests.football-data.org/" + matches.matches[g].awayTeam.id + ".svg");
        imgvisitante.className="escudo"
        escvisitante.appendChild(imgvisitante);
        fila.appendChild(escvisitante);

        var visitante = document.createElement("td");
        visitante.textContent = matches.matches[g].awayTeam.name;
        fila.appendChild(visitante)

    tbody.append(fila);

    } 

