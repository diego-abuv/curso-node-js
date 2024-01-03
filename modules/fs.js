const { error } = require("console");
const fs = require("fs");
const path = require("path");

// Criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log(`Pasta criada com sucesso!`);
});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, `/test`, `test.txt`),
  `Hello Node!`,
  (error) => {
    if (error) {
      return console.log(`Erro: `, error);
    }

    console.log(`Arquivo criado com êxito!`);
  }
);

// Adicionar a um arquivo

fs.appendFile(
  path.join(__dirname, `/test`, `test.txt`),
  `Hello World!`,
  (error) => {
    if (error) {
      return console.log(`Erro: `, error);
    }

    console.log(`conteúdo anexado!`);
  }
);
