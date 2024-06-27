const fs = require('fs');

let data1;

fs.readFile('./data/avocado.txt','utf-8',(err,data) => {

    // err could be FALSY - when there is no ERROR
    // err will be some OBJECT (TRUTHY value) - when there is an error
    if (err) {

        console.log(err.message)

    } else {

        data1 = data;
        console.log(`data1 inside the CALLBACK of readFile() = ${data1}`)

    }


})

console.log(`data1 after readFile() = ${data1}`)

setTimeout(() => {
    
    console.log(`\n\ndata1 after readFile() inside setTimeout = ${data1}`)

},50)