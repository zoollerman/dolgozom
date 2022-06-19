fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(res => console.log(res)); */

/*
* Object (Objectum)


/* console.log(
    {
        firstName: "József",
        lastName: "Kovács",
        Age: 45

    }["lastName"]
);
console.log(
    {
        firstName: "József",
        lastName: "Kovács",
        Age: 45,
        phoneNumbers: ["0670345673", "06204150880"],
        Address: {
            street: "Király u",
            city: "Budapest"
        }
    }.phoneNumbers[0]
);

//lookup, kulcs alapú kikérés

console.log(
    [
        {
            brand: "Apple",
            name: `iPhone x`,
            price: 250000,
            provider: {
                country: `DE`,
                name: `T-MOBILE`,
            }
        },
        {
            brand: "Huawei",
            name: `iPhone x`,
            price: 250000,
            provider: {
                country: `DE`,
                name: `T-MOBILE`,
            }
        },
        {
            brand: "Cubot",
            name: `iPhone x`,
            price: 250000,
            provider: {
                country: `DE`,
                name: `T-MOBILE`,
            }
        }
    ][1].provider.country
);
 */
