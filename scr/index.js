import express from 'express';
import connectDatabase from './config//dbConnect.js';

const conexao = await connectDatabase();
const app = express();
const PORT = 3000;

app.get("/",(req,res) => {

    res.status(200).send("Código de alta perfomance")
});


app.listen(PORT, () => {
    console.log("sevidor escutando")
});

conexao.on("error",(erro) => {
    console.error("erro de conexão",erro)
})

conexao.once("open",() => {
    console.log("conexão com o banco feita com sucesso")
})