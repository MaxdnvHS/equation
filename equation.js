// Résolution d'une équation du 2nd degré : ax² + bx + c = 0

function equation(a, b, c) {
    let delta = b * b - 4 * a * c;

    if (delta > 0) {
        let x1 = (-b - Math.sqrt(delta)) / (2 * a);
        let x2 = (-b + Math.sqrt(delta)) / (2 * a);
        console.log("x1 =", x1);
        console.log("x2 =", x2);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        console.log("x =", x);
    } else {
        console.log("Aucun résultat possible");
    }
}

// Tests
equation(1, -5, 6);   // delta > 0  → x1=2, x2=3
equation(1, -2, 1);   // delta = 0  → x=1
equation(1,  0, 1);   // delta < 0  → aucun résultat