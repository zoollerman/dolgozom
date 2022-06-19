// https://jsonplaceholder.typicode.com/posts

document.getElementById(`login`).onclick = function () {
    var url = 'https://reqres.in/api/login';
    var body = JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
    })
    sendRequest(url, 'POST', body, function (token) {
        console.log(token);
        sendRequest('https://reqres.in/api/users', 'GET', null, function(users){
            console.log(users);
        })

    })


};
function sendRequest(url, method, body, callback) {
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    }
}

// Promise

function sendRequest2(url, method, body) {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (){
            if (xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300) {
                    resolve(JSON.parse(xhr.responseText));
                    
                } else   {
                    reject(xhr.responseText);
                }         }
            }
            xhr.open(method, url);
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.send(body);
    })


}



/* 
function susdMegARantottat() {
    console.log(`Önts olajat a serpenyőbe`);
    adjHozzaFuszereket();
    console.log(`Süsd 4 percig`);
    console.log(`Kész`);
}


function adjHozzaFuszereket() {
    console.log(`Adj hozzá sót`);
    console.log(`Adj hozzá borsot`);
    setTimeout(function() {
        console.log(`Később hajtódik végre`);
    }, 1000);
    console.log(`Adj hozzá paprikát`);
}

susdMegARantottat();
console.log(`----`);
susdMegARantottat();
console.log(`----`);
susdMegARantottat();



Function, matematikai függvény
input adatból outpiut adatot generáló eszköz


 
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
} 

document.all[7].style.backgroundColor = "red";

document.all[7].


console.dir(document.all[7]);
*/
