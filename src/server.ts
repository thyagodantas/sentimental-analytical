// src/server.ts
import express from "express";
import { SentimentController } from "./contexts/sentimentAnalysis/infrastructure/SentimentController";

// Cria uma instância do aplicativo Express
const app = express();

// Middleware para processar JSON no corpo das requisições
app.use(express.json());

// Define a rota para análise de sentimentos
app.post("/analyze", SentimentController.analyze);

// Define a porta onde o servidor vai escutar
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
