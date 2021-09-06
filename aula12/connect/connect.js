const mongoose = require("mongoose");

const Connect = () => {
  mongoose.connect("mongodb://localhost:27017/filmes-projeto", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => console.log("MongoDB connected")).catch(err=>console.log(err))
};  

module.exports = Connect;