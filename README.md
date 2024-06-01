# simple-notes (trab TDS)

## frontend

#### Views
- **HomeView:**
    - Exibe todas as notas salvas.
- **NewNoteView:** 
    - Formulário para inserir uma nova nota.
- **NoteView:** 
    - Formulário para editar uma nota pré preechido com os dados da nota.
#### Componentes
- **NoteDisplay:**
    - Exibe uma nota e um botão para deletá-la.

## Setup do projeto

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## api

- Para a implementação da API, foi utilizado Node, Express e MongoDB.
- O driver utilizado para o MongoDB foi o Mongoose.
- MongoDB foi executado em um container local com podman, cujo arquivo de configuração é o `compose.yml`.
- Comando para criar e executar o container:
```bash
podman-compose -f compose.yml up -d
```

### Comandos executados para inicializar o projeto

- Instala as dependências do projeto
```bash
npm install
```

- Executa a aplicação
```bash
node index.js
```
