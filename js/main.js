// al caricamento della pagina
// creaGriglia();

document.getElementById("start").addEventListener("click", function () {
    console.log("inizio partita");
    creaGriglia();
});

/******************************************************************** */
//creare la griglia dinamicamente, inserendo N elementi .square nel container
function creaGriglia() {
    const grid = document.getElementById("grid");
    //ci assicuriamo che la griglia sia vuota
    grid.innerHTML = "";

    //recupera il livello in base al valore della select
    const livello = getLivello();
    let dimensioniGriglie = [9, 64, 49];
    let numCelleTotali = dimensioniGriglie[livello-1];
    let numCellePerRiga = Math.sqrt(numCelleTotali); //radice quadrata: es 100 totali -> 10 per riga
    
    const bombsList = [];
    let gameover = false;
    let punteggio = 0;
 
    while(false) {
        const nuovoNumero = getRndInteger(1, numCelleTotali);

        if(!bombsList.includes(nuovoNumero) ) {
            bombsList.push( nuovoNumero );
        }
    }

    console.log(bombsList);

    for (let i = 1; i <= numCelleTotali; i++) {

        let cella = creaQuadrato(i);
        cella.style.width = `calc(100% / ${numCellePerRiga})`;
        cella.style.height = `calc(100% / ${numCellePerRiga})`;
        
        //per ogni quadrato voglio un evento che gestisca il click
        cella.addEventListener("click", function () {

            const numCelleValide = numCelleTotali - bombsList;

            if(!gameover) {
                if(!bombsList.includes(i)) {
                    cella.classList.add("clicked");
                    punteggio++;
                    document.getElementById("msg").innerHTML = `Punteggio: ${punteggio}`;

                    if(punteggio >= numCelleValide) {
                        alert("Hai vinto");
                        gameover = true;
                    }
                } else {
                    cella.classList.add("mine");
                    gameover = true;
                }
            }

            // let numeroCella = parseInt(cella.innerText);
            // console.log("Cella cliccata (inner)", numeroCella);
        });

        grid.appendChild(cella);

    }
}

function getLivello() {

    const livello = parseInt(document.getElementById("level").value);
    console.log("Difficoltà: ", livello);
    return livello;
}

function creaQuadrato(numero) {

    const cella = document.createElement("div");
    cella.classList.add("square");
    cella.innerText = numero;

    return cella;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}