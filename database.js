const mongoose = require('mongoose');
class Database {

    constructor() {
        this.connect();
    }
    connect() {
        //password is Mongodb@2001 and we have to write Mongodb%402001
        mongoose.connect('mongodb+srv://Devendra:MongoDB@loginpagecluster.yq1oa.mongodb.net/LoginPage?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log("Database Connection successfully");
            })
            .catch((err) => {
                console.log("There is error in Database connection " + err);
            })
    }
}

module.exports = new Database();