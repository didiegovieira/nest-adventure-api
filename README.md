# Nest Adventure API

Esta é a API de Aventura construída com NestJS. A API permite gerenciar personagens, itens e missões em um jogo de aventura.

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/didiegovieira/nest-adventure-api.git
    cd nest-adventure-api
    ```

2. Instale as dependências
    ```sh
    npm install
    ```

3. Configure o banco de dados: Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias:
    ```sh
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USER=postgres
    DATABASE_PASSWORD=postgres
    DATABASE_NAME=nest
    ```

## Executando a Aplicação

1. Inicie o banco de dados usando Docker:
    ```sh
    docker-compose up -d
    ```

2. Execute a aplicação em modo de desenvolvimento:
    ```sh
    npm run start
    ```

3. Acesse a documentação da API no Swagger: Abra o navegador e vá para http://localhost:3000/api.

## Testes

1. Execute os testes unitários:
    ```sh
    npm run test
    ```

2. Execute os testes end-to-end:
    ```sh
    npm run test:e2e
    ```

## Estrutura do Projeto
- src/
  - application/: Contém os casos de uso e DTOs.
  - config/: Módulos de configuração.
  - domain/: Entidades do domínio.
  - infrastructure/: Controladores HTTP.
  - main.ts: Arquivo principal da aplicação.