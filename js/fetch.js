partidosFetch()
function posicionesFetch() {
    const url = "https://api.football-data.org/v2/competitions/2014/matches"
    fetch(url,{
        method : "GET",
        headers:{
            "X-Auth-Token" : "6aacce9863cb44628022e0835d68f993"
        }
    }).then(response => {
        if(response.ok) return response.json();
    }).then(partidos => {
        partidos(partidos)
    })
}

function partidos(partidos) {

}