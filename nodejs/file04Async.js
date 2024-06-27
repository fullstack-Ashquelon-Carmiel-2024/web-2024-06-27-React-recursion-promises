const fs = require('fs');

let fileList = []

const ar = ['lalala','hahaha','nununu']
ar.forEach((el,idx) => {
    console.log(`Element number ${idx} is ${el}`)
})

fs.readdir('./data',(err, fileList) => {

    if (err) {
        console.log(err.message);
        return;
    }

    console.log('inside the callback')
    console.log('File List:\n', fileList)

    fs.readFile(`./data/${fileList[fileList.length-1]}`,'utf8',(err,txt)=>{

        if (err) {
            console.log(err.message);
            return;
        }

        console.log(`The text of the last file is:\n`,txt)

        /** MISSION: Now write asyncronously "txt" into ./data/output.txt */
        fs.writeFile('./data/output.txt',txt,(err) => {

            if (err) {
                console.log(err.message);
                return;
            }

            console.log('Has written the file successfully')
            console.log('I AM IN THE "CALLBACK HELL👿"')

        })

    })

})

console.log('File List:\n', fileList)