# API
- Esta api faz parte do projeto **simple-notes** , trabalho da disciplina de Tecnologias para Desenvolvimento de Sistemas.
- Para a implementação da API, foi utilizado Node, Express e MongoDB.
- O driver utilizado para o MongoDB foi o Mongoose.
- MongoDB foi executado em um container local com podman, cujo arquivo de configuração é o `compose.yml`.
- Comando para executar o container:
```bash
podman-compose -f compose.yml up -d
```

### Comandos executados para inicializar o projeto
- Inicializa o projeto com o nome e versão do projeto
```bash
npm init -y
```

- Instala as dependências do projeto
```bash
npm install express mongoose dotenv cors
```
