const mongoose = require('mongoose');
const env = require('./environment/environment')
mongoose.Promise=global.Promise;

const env={
    dbName:'react-cosmos',
    key: 'C5jcrlaqlUX3nb0ry3nuorFymXYMo8bysXkVZewUl9XTWkLhP2LuFwM1gJcSX66unEpfV3yLnQEicoUAJUZFXA==',
    port: 10255
};

const mongoUri=`mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`;
function connect(){
    return mongoose.connect(mongoUri,{useMongoClient :true });
}
module.exports = {
    connect,
    mongoose
};