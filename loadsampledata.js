//Warning - Don't Touch This File It Might Result in Some Error

require('colors')
const Jokes = require(`./models/jokes`)
const Animals = require(`./models/animals`)
const Credits = require(`./models/FakeCredit`)
const flirts = require('./models/flirt')
const insults = require('./models/insults')
const mongoose = require('mongoose')
require('dotenv').config()

let jokesData = require('./sample/jokes').jokes
let animalsData = require('./sample/animals').animals
let creditsData = require('./sample/credits').cards
let flirtData = require('./sample/flirts')
let insltsData = require('./sample/insults')

async function loadData() {
    try {
        console.clear()
        await mongoose.connect(process.env.MONGOSRV, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.clear()
        console.log("[+] Connected to Database\n".green)
        console.log("[+] Inserting Data Started!\n".green)
        for(let i = 0; i < jokesData.length; i++){
           await Jokes.create({
                joke : jokesData[i].joke,
                category : jokesData[i].category
            })
        }

        console.log("[+] Successfully Inserted Jokes!\n".green)
        for(let i = 0; i < animalsData.length; i++){
            await Animals.create({
                image : animalsData[i].image,
                fact : animalsData[i].fact,
                animal :  animalsData[i].animal,
             })
         }

        console.log("[+] Successfully Inserted Animals!\n".green)

        for(let i = 0; i < creditsData.length; i++){
            await Credits.create({
                type : creditsData[i].type,
                number : creditsData[i].number,
                expiration :  creditsData[i].expiration,
                owner : creditsData[i].owner
             })
         }

        console.log("[+] Successfully Inserted Fake Credit Cards!\n".green)

        for(let i = 0; i < flirtData.length; i++){
            await flirts.create({
                flirt : creditsData[i].flirt,
             })
         }

        console.log("[+] Successfully Inserted Flirts!\n".green)

        for(let i = 0; i < insltsData.length; i++){
            await insults.create({
                insult : creditsData[i].insult,
             })
         }

        console.log("[+] Successfully Inserted Insults!\n".green)

        console.log("[+] Operation Successfully!\n".green)

        process.exit();

    } catch(e) {
      console.log(e);
      process.exit();
    }
};

loadData()

