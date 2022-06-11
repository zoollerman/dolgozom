/*
Összegzés algoritmusa:

összeg = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    összeg = összeg + szám
CIKLUS VÉGE  

*/
let numericArray = [1,3,2,5,4,7,6,9];
let sum=0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Sum: ", sum);

/*
Számlálás algoritmusa

db = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    Ha igaz a feltétel a számra, AKKOR
    FELTÉTEL VÉGE
*/

let db = 0; 
for (var i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 ==0) {
        db++;  
    } 
}
console.log("Even numbers: ", db);

/*
legnagyobb = első elem 
CIKLUS AMÍG van még elem, ADDIG
    elem = következő elem
    HA elem > legnagyobb, AKKOR
       legnagyobb = elem  
    FELTÉTEL VÉGE 
CIKLUS VÉGE
*/

let biggest = numericArray[0]; 
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    } 
}
console.log("The biggest element: ",biggest);

let smallest = numericArray[0]; 
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] < smallest
    ) {
        smallest = numericArray[i];
    } 
}
console.log("The smallest element: ",smallest);



/*
találat = HAMIS 
CIKLUS AMÍG van elem ÉS NEM találat
    elem = következő elem
    HA keresett tulajdonságú az elem, AKKOR
        találat = IGAZ
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let find = 15; 
let found = false; 
for (let i = 0; i < numericArray.length && !found; i++) {  
    if (numericArray[i] == find) {
        found = true;  
    } 
}
console.log("This aray contains element" ,find, found);

