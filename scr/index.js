import express from 'express';
import connectDatabase from './config/dbConnect.js';

const app = express();
const PORT = 3000;
const conexao = await connectDatabase();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Código de alta perfomance");
}); 

app.post("/", (req, res) => {
    const { nome, email, senha } = req.body;
    console.log("Dados do formulário de cadastro:", nome, email, senha);

    res.status(200).json({ message: "Cadastro realizado com sucesso" });
});


app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});

conexao.on("error", (erro) => {
    console.error("Erro de conexão:", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso");
});
