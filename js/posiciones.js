function tablaclasificacion(clasificacion) {
    console.log(clasificacion)

       //Hago variable del elemento table y tbody
    
       var tbody = document.getElementById("tablebody")

    
       //Aqui están las variables en las filas (tr), introduzco los datos de matches en la variable especificamente creada, y por ultimo asigno a fila como pariente de la variable.
       
       
       for (var g = 0; g < clasificacion.length; g++) {
           var fila = document.createElement("tr");
               for(var h = 0; h < 12; h++){
               var columna = document.createElement("td");
           }
               var rank = document.createElement("td");
               rank.textContent = clasificacion[g].position;
               fila.appendChild(rank)                                     
               
               var esc = document.createElement("td");
              
               var img = document.createElement("img");
               img.setAttribute("src", "https://crests.football-data.org/" + clasificacion[g].team.id + ".svg");
               img.className="escudo"
               esc.appendChild(img)
               fila.appendChild(esc)
               var equipo = document.createElement("td")
               equipo.textContent = clasificacion[g].team.name;
               fila.appendChild(equipo)
               var Psjs = document.createElement("td")
               Psjs.textContent = clasificacion[g].playedGames,
               fila.appendChild(Psjs)
               var vict = document.createElement("td")
               vict.textContent = clasificacion[g].won,
               fila.appendChild(vict)
               var draw = document.createElement("td")
               draw.textContent = clasificacion[g].draw,
               fila.appendChild(draw)
               var perd = document.createElement("td")
               perd.textContent = clasificacion[g].lost,
               fila.appendChild(perd)
               var gola = document.createElement("td")
               gola.textContent = clasificacion[g].goalsFor,
               fila.appendChild(gola)
               var golc = document.createElement("td")
               golc.textContent = clasificacion[g].goalsAgainst,
               fila.appendChild(golc)
               var gold = document.createElement("td")
               gold.textContent = clasificacion[g].goalDifference,
               fila.appendChild(gold)
               var punt = document.createElement("td")
               punt.textContent = clasificacion[g].points;
               fila.appendChild(punt)
       
               var form = document.createElement("td")
               var ultimos5 = clasificacion[g].form;
               ultimos5 = ultimos5.replaceAll("W", "✔️")
               ultimos5 = ultimos5.replaceAll("D", "➖");
               ultimos5 = ultimos5.replaceAll("L", "❌");
               ultimos5 = ultimos5.replaceAll(",", " ");
               form.append(ultimos5)
               fila.append(form)
       
               tbody.appendChild(fila);
           } 
       
}
 tablaclasificacion(standing.standings[0].table)
 

    console.log(standing.standings[0])
