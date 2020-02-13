const Array= [
    "Parijs",
    8,
    "IJselmeer",
    ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];
punten = 0;

function antwoordCheck() {
    var frankrijk = document.getElementById("frankrijk").value;
    var spin = document.getElementById("spin").value;
    var meer = document.getElementById("meer").value;
    var auto = document.getElementById("auto").value;
    var wadden = document.getElementById("wadden").value;

    if (frankrijk == Array[0]) {
        punten = punten += 1;
    }
    if (spin == Array[1]) {
        punten = punten += 1;
    }
    if (meer == Array[2]) {
        punten = punten += 1;
    }

    if (Array[3].includes(auto)) {
        punten = punten += 1;
    }

    if (Array[4].includes(wadden)) {
        punten = punten += 1;
    }
    
    document.getElementById("resultaat").innerHTML =  "Jouw resultaat is" + punten;
}