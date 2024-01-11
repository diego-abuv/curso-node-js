const mongoose = require(`mongoose`);
require("dotenv").config();
const ConnectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cursonodejs.tsfd0sw.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Conexão ao banco de dados realizada com sucesso!");
  } catch (error) {
    console.log("Ocorreu um erro ao conectar ao banco de dados! Erro: ", error);
  }
};

module.exports = ConnectToDatabase;
