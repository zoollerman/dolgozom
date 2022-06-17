
function susdMegARantottat() {
    console.log(`Önts olajat a serpenyőbe`);
    adjHozzaFuszereket();
    console.log(`Süsd 4 percig`);
    console.log(`Kész`);
}


function adjHozzaFuszereket() {
    console.log(`Adj hozzá sót`);
    console.log(`Adj hozzá borsot`);
    console.log(`Adj hozzá paprikát`);
}

susdMegARantottat();
console.log(`----`);
susdMegARantottat();
console.log(`----`);
susdMegARantottat();


/* 
Function, matematikai függvény
input adatból outpiut adatot generáló eszköz

*/

function addOne(szam) {
    return szam + 1;
}

console.log(
    addOne(addOne(addOne(3)))
);

function addTwo(szam) {
    return {
        0: 2,
        1: 3,
        2: 4
    }[szam];
}


console.log(addTwo(addTwo(0)));


// First class cityzen

// anonim function


var addThree = function (szam) {
    return szam + 3;
};
console.log(addThree(4));

/* var window = {
    console: {
        log: function (msg) {
            
        }
    }
} */

document.all[7].style.backgroundColor = "red";

document.all[7].


console.dir(document.all[7]);







