const cds = require("@sap/cds");
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://krutika:Asdf1234@mongodemo-shard-00-00.okv0e.mongodb.net:27017,mongodemo-shard-00-01.okv0e.mongodb.net:27017,mongodemo-shard-00-02.okv0e.mongodb.net:27017/customerQuo?ssl=true&replicaSet=atlas-10h2yi-shard-0&authSource=admin&retryWrites=true&w=majority";
const db_name = "customerQuo";
const client = new MongoClient(uri);
const ObjectId = require('mongodb').ObjectId

async function _createCustomer(req){
    //console.log(client);
    await client.connect();
    console.log("----");
    var db = await client.db(db_name);
    var customer = await db.collection("customer");
    console.log(req);
    const results = await customer.find(req);

    // if(results.insertedId){
    //     req.data.id = results.insertedId;
    // }
    return results;
}

module.exports = cds.service.impl(function(){
    const { customer } = this.entities;
    this.on("READ", customer, _createCustomer);
});