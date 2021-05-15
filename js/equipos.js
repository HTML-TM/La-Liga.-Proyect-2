function tablaequipos (equipos) {
    console.log(equipos)
    
    var tbody = document.getElementById("tablebody2")

    for (var h = 0; h < equipos.length; h++) {
        var filas = document.createElement("tr");
            for(var r = 0; r < 11; r++){
            var columnas = document.createElement("td");
        }
        var name = document.createElement("td");
        name.textContent = equipos[h].name;
        filas.appendChild(name) 

        var clubcolors = document.createElement("td")
        clubcolors.textContent = equipos[h].venue;
        filas.appendChild(clubcolors)

        var email = document.createElement("td")
        email.textContent = equipos[h].email;
        filas.appendChild(email)

        var web = document.createElement("td")
        web.textContent = equipos[h].website;
        filas.appendChild(web)

        var phone = document.createElement("td")
        phone.textContent = equipos[h].phone;
        filas.appendChild(phone)

    

        tbody.appendChild(filas);
    }
    
       
}
tablaequipos(teams.teams)
 

console.log(equipos)