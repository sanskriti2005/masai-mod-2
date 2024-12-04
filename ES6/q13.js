const people = [
    {
        name: "Alice",
        address: {
            city: "New York",
            street: {
                name: "Broadway",
                number: 123
            }
        }
    },

    {
        name: "Bob",
        address: {
            city: "Los Angeles",
            street: {
                name: "Sunset Boulevard",
                number: 456
            }
        }


    }
];

let greetingsArr = [];

// for the first person
for(const {name, address:{city}, address:{street:{name:streetName}}} of people){
    greetingsArr.push(`${name} lives in ${city} on ${streetName}`);
}

console.log(greetingsArr);

