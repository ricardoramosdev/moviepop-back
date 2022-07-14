var app = require('./app')
var port = process.env.PORT || 4000;
const user = "moviepop";
const password = "moviepop";
var URL = `mongodb+srv://${user}:${password}@cluster0.9n8uumg.mongodb.net/test`;
var mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(URL);
    console.log(` \x1b[32m Escuchando a mongoDb  \x1b[32m`);
    app.listen(port, () =>
      console.log(` \x1b[33m Escuchando a puerto ${port}  \x1b[33m`)
    );
  } catch (err) {
    console.log(`\x1b[31m Error al conectar mongoDb  \x1b[31m`);
  }
}

connect();
