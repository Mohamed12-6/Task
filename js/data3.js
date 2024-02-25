const fs = require("fs")
const addPerson = (id, fname, lname, age) => {
    // هحمل داتا
    const alldata = loadData()

    const dublicatedData = alldata.filter((obj) => {
        return obj.id === id
    })
    // console.log(dublicatedData)
    if (dublicatedData.length == 0) {
        alldata.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
        })
        saveallData(alldata)
    }
    else {
        console.log("error dublicated")
    }
    // alldata.push({
    //     id:id,
    //     fname:fname,
    //     lname:lname,
    //     age:age,
    // })
    // saveallData(alldata)
}
///////////////////////////////////////////
//تحميل داتا 
const loadData = () => {
    // 1-
    try {
        const loadDataJson = fs.readFileSync("data2.json").toString()
        return JSON.parse(loadDataJson)
    }
    catch {
        return []
    }
}
// //////////////////////////////////
// تخزين الداتا 
const saveallData = (alldata => {
    const saveallDataJson = JSON.stringify(alldata)

    fs.writeFileSync('data2.json', saveallDataJson)
})
/////////////////////////////////////////////////////////////////////////////
//حذف داتا 

const deleteData = (id) => {
    const alldata = loadData()
    const dataToKeep = alldata.filter((obj) => {
        return obj.id !== id
    })
    saveallData(dataToKeep)
    // console.log(dataToKeep)
    console.log("you have already deleted an Item")

}
/////////////////////////////////////////////////////////////////////////////////////////
const readData = (id) => {
    const alldata = loadData();
    const itemNeeded = alldata.find((obj) => {
        return obj.id == id
    })
    // console.log(itemNeeded)
    if (itemNeeded) {
        console.log(itemNeeded.fname)
    }
    else{
        console.log("id needed not found")
    }

}
/////////////////////////////////////////////////////////////////
const listData=()=>{
    const alldata = loadData();
    alldata.forEach((obj)=>{
        console.log(obj.fname ,obj.age ,obj.city)
    })
}
module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
};