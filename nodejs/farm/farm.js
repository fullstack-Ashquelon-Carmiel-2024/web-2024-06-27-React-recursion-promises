const express = require('express');
const fs = require('fs');
const path = require('path');

const replaceTempl = require('./modules/replace-templ');

/***** Our Variables *****/
let port = process.env.PORT ? process.env.PORT : 3051;

let dataDir = 'data';
let templDir = 'templates';
let nodeEnv = process.env.NODE_ENV.toLowerCase();
global.hostingDir =  nodeEnv==='development' ? '' : '/natalie/farm';

/***** Reading the Files *****/
let dataJSON = fs.readFileSync(path.join(__dirname,dataDir,'data.json'),'utf-8');
const dataAr = JSON.parse(dataJSON);

let productTempl = fs.readFileSync(
    path.join(__dirname,templDir,'productTempl.html'),'utf-8');
let product404Templ = fs.readFileSync(
    path.join(__dirname,templDir,'404ProductTempl.html'),'utf-8')
       .replaceAll('%*HOSTINGDIR*%',hostingDir);
let homeTempl = fs.readFileSync(
    path.join(__dirname,templDir,'homeTempl.html'),'utf-8')
        .replaceAll('%*HOSTINGDIR*%',hostingDir);
let figureTempl = fs.readFileSync(
    path.join(__dirname,templDir,'figureTempl.html'),'utf-8');

/***** Create the Server *****/
// Create the server of express.
// Traditionally we call it "app".
const app = express();

/***** MIDDLEWARE *****/
//app.use(express.static(path.join(__dirname,'public')));
app.use(hostingDir,express.static(path.join(__dirname,'public')));

/***** Router *****/
app.get(`${hostingDir}/`,(req,res) => {
    
    let figureList = dataAr.map(obj => replaceTempl(figureTempl,obj)).join('');
    res.send(homeTempl.replace('%*FIGURELIST*%',figureList))
    
})

app.get('/product',(req,res) => {

    res.send(`<h1>Our farm has the best meat 🥩</h1>`)
    
})

// MISSION: create route to get /data and to send
//    the whole dataJSON

app.get('/data',(req,res) => {
    
    res.send(dataJSON);
    
})

app.get('/carrot',(req,res) => {
    
    //res.send(dataAr[3]);
    res.send(productTempl.replaceAll('%*PRODUCTNAME*%',dataAr[3].productName)
    .replaceAll('%*IMAGE*%',dataAr[3].image));
    
})

app.get(`${hostingDir}/product/:id`,(req,res) => {
    
    console.log('req.params:\n',req.params)
    let id = req.params.id;

    0 <= id && id < dataAr.length ?
        res.send(replaceTempl(productTempl, dataAr[id])) :
        res.status(404).send(product404Templ);
    /* res.send(productTempl.replaceAll('%*PRODUCTNAME*%',dataAr[req.params.id].productName)
    .replaceAll('%*IMAGE*%',dataAr[req.params.id].image)); */
    
})
/* app.get('/product/:id',(req,res) => {
    
    console.log('req.params:\n',req.params)
    
    res.send(productTempl.replaceAll('%*PRODUCTNAME*%',dataAr[req.params.id].productName)
    .replaceAll('%*IMAGE*%',dataAr[req.params.id].image));
    
}) */

// This is an example for 2 parameters
app.get('/product/:id/:color',(req,res) => {
    
    console.log('req.params:\n',req.params)
    //res.send(dataAr[3]);
    res.send(productTempl.replaceAll('%*PRODUCTNAME*%',dataAr[3].productName)
    .replaceAll('%*IMAGE*%',dataAr[3].image));
    
})

/***** The Listener *****/
app.listen(port,() => {
    
    console.log(`Listening on the port ${port} ...`)
    
})