const TERRA = "0xB96E54";
const A_TERRENO = 96;
const Y_TERRENO = 624;

let terreno;

function preload(s) {}

function create(s) {
    terreno= PP.shapes.rectangle_add(s,
        LARGHEZZA/2, 
        Y_TERRENO + A_TERRENO/2, 
        LARGHEZZA, 
        A_TERRENO,
        TERRA,
        1
    )
}

function update(s) {}

function destroy(s) {}

PP.scenes.add("gino", preload, create, update, destroy);