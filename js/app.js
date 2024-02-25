



const yargs = require("yargs")
const data3 = require("./data3")
yargs.command({
    command: "add",
    describe: "to add item",
    builder: {
        fname: {
            describe: "to add first name",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "to add last name",
            type: "string"
        },
    },
    handler: (x) => {
        // console.log("added item is good")

        // console.log(data3)
        // console.log(data3.fname)
        // console.log(data3.lname)

        data3.addPerson(x.id , x.fname , x.lname,x.age )
    }
})

yargs.command({
    command:"delete",
    describe:"delete this item",
    handler: (x) => {
        // console.log("deleted item is good")
        data3.deleteData(x.id)
    }
}) 

yargs.command({
    command:"read",
    describe:"read this item",
    builder:{
        id:{
            describe:'Enter the ID of person you want to read',
            demandOption :true,
            type:"string"
        }
    },
    handler: (x) => {
        data3.readData(x.id)
    }
})

yargs.command({
    command:"list",
    describe:"list the first name and last name",
    handler: (x) => {
        data3.listData(x.id)
    }
})



yargs.parse()
