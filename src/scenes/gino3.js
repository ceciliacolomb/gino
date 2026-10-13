const TERRA = "0xB96E54";
const VERDE = "0x72A11D";
const ROSSO = "0xE44A4A";

const A_TERRENO = 96;
const Y_TERRENO = 624;

const X_GINO = 200;
const L_GINO = 81;
const A_GINO = 84;
const L_FUNGO = 90;
const A_FUNGO = 63;

const VEL_SALTO = 1000;
const TASTO_SALTO= PP.key_codes.SPACE;

let terreno;
let gino;
let fungo;

function preload(s) {}

function crea_terreno(s) {
    terreno= PP.shapes.rectangle_add(s,
        LARGHEZZA/2, 
        Y_TERRENO + A_TERRENO/2, 
        LARGHEZZA, 
        A_TERRENO,
        TERRA,
        1
    );
    PP.physics.add(s, terreno, PP.physics.types.STATIC);
}

function crea_gino(s) {
    gino = PP.shapes.rectangle_add(s,
        X_GINO, Y_TERRENO - A_GINO/2,
        L_GINO, A_GINO,
        VERDE,
        1
    );
    // PP.physics.add(s, gino, PP.physics.types.DYNAMIC);
    // PP.physics.set_collide_world_bounds(gino, true);
    // PP.physics.add_collider(s, gino, terreno);
}

function crea_fungo(s) {
    fungo = PP.shapes.rectangle_add(s,
        LARGHEZZA * 3/4, Y_TERRENO - A_FUNGO/2,
        L_FUNGO, A_FUNGO,
        ROSSO,
        1
    );
}

function create(s) {
    crea_terreno(s);
    crea_gino(s);
    crea_fungo(s);
}

function update(s) {
    salta(s);
}

function salta(s) {
    if (PP.input.key_pressed(s, TASTO_SALTO)) {
        PP.physics.set_velocity_y(gino, -VEL_SALTO);
    }
}

function destroy(s) {}

PP.scenes.add("gino", preload, create, update, destroy);