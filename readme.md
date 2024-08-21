# Sentiment Analysis API

Este é um projeto de uma API de análise de sentimentos em texto, utilizando Node.js, TypeScript, e a biblioteca `sentiment` para detectar emoções em textos em português.

## Funcionalidades

- Detecta emoções como alegria, tristeza, raiva, medo, surpresa e nojo.
- Análise detalhada de textos com ajuste de confiança com base em palavras-chave e intensidade.
- API simples e fácil de usar com suporte para múltiplas emoções.

## Requisitos

- Node.js (v14 ou superior)
- npm (v6 ou superior)

## Arquitetura

Este projeto utiliza uma arquitetura baseada em **Domain-Driven Design (DDD)**, organizada em uma **Vertical Slice Architecture**. Essa abordagem permite uma separação clara das responsabilidades e facilita a manutenção e escalabilidade do código.

### Camadas da Arquitetura

- **Domain**:

  - Contém as regras de negócio fundamentais e as entidades do domínio. No caso deste projeto, inclui as classes relacionadas à detecção de emoções e a interface para o analisador de sentimentos.
  - **Entidades**: Como a classe `Emotion`, que representa uma emoção detectada no texto.
  - **Interfaces**: Como a `ISentimentAnalyzer`, que define o contrato para implementações de analisadores de sentimentos.

- **Application**:

  - Contém os casos de uso do sistema, que orquestram a lógica do domínio para resolver problemas específicos. Nesta camada, você pode encontrar serviços que combinam as regras de negócio com operações específicas.

- **Infrastructure**:
  - Contém as implementações específicas de tecnologias, como os controladores HTTP, integração com bibliotecas externas (como `sentiment`), e configuração de banco de dados, se necessário. Aqui, os detalhes técnicos de como a aplicação interage com o mundo exterior são gerenciados.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/sentiment-analysis-api.git
   cd sentiment-analysis-api
   ```

2. Instale as dependências:

```bash
npm install
```

### Uso

1. Inicie o servidor:

```bash
npm start
```

2. Faça uma requisição POST para http://localhost:3000/analyze com um corpo JSON contendo o texto para análise:

```bash
{
  "text": "Hoje foi um dia extremamente difícil. Acordei já me sentindo cansado e preocupado com todos os problemas que estavam por vir..."
}
```

3. A resposta será um JSON com as emoções detectadas e suas respectivas confianças.
