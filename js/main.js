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
    let numCelleTotali;
    let numCellePerRiga;

    if (livello == 1) {
        numCelleTotali = 81;
        numCellePerRiga = 9;
    } else if (livello == 2) {
        numCelleTotali = 64;
        numCellePerRiga = 8;
    } else if (livello == 3) {
        numCelleTotali = 49;
        numCellePerRiga = 7;
    }

    const cellaFortunata = getRndInteger(1, numCelleTotali);
    document.getElementById("msg").innerText = `Cella fortunata: ${cellaFortunata}`;

    for (let i = 1; i <= numCelleTotali; i++) {

        let cella = creaQuadrato(i, cellaFortunata);
        cella.style.width = `calc(100% / ${numCellePerRiga})`;
        cella.style.height = `calc(100% / ${numCellePerRiga})`;

        if(i==cellaFortunata) {
            cella.style.border = "solid 1px red";
        }

        grid.appendChild(cella);

    }
}

function getLivello() {

    const livello = parseInt(document.getElementById("level").value);
    console.log("Difficoltà: ", livello);
    return livello;
}

function creaQuadrato(numero, cellaFortunata) {

    const cella = document.createElement("div");
    cella.classList.add("square");
    cella.innerText = numero;

    //per ogni quadrato voglio un evento che gestisca il click
    cella.addEventListener("click", function () {

        if(numero==cellaFortunata) {
            console.log("Hai vinto", numero);
        } else {
            console.log("Sbagliato, ritenta", numero);
        }

        // let numeroCella = parseInt(cella.innerText);
        // console.log("Cella cliccata (inner)", numeroCella);

        cella.classList.toggle("highlight");

    });

    return cella;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}