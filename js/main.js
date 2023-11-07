// <div class="square"></div>

//creare la griglia dinamicamente, inserendo N elementi .square nel container
let numCelle = 64;
let grid = document.getElementById("grid");

for (let i = 1; i <= numCelle; i++) {
    
    let cella = creaQuadrato(i);
    grid.appendChild(cella);

}

/******************************************************************** */

function creaQuadrato(numero) {

    const cella = document.createElement("div");
    cella.classList.add("square");

    //per ogni quadrato voglio un evento che gestisca il click
    cella.addEventListener("click", function() {

        console.log("Cella cliccata", numero);
        
        //versione abbreviata
        cella.classList.toggle("highlight");

        //versione completa
        // if(cella.classList.contains("highlight")) {
        //     cella.classList.remove("highlight");
        // } else {
        //     cella.classList.add("highlight");
        // }

    });

    return cella;
}