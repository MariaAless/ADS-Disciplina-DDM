# Tutorial: Criando um Projeto Node.js com TypeScript
### 🎯 Objetivo:

- Ensinar como **configurar um projeto Node.js com suporte a TypeScript**, do zero até o momento em que é possível escrever e compilar arquivos `.ts`.
### Pré-requisitos:

- Node.js instalado (você pode verificar com `node -v`)
- npm (gerenciador de pacotes que vem com o Node)
### Passo a Passo

### 1. Crie a pasta do projeto e acesse-a:

```bash
mkdir projeto-typescript
cd projeto-typescript

```

---

### 2. Inicie o projeto Node.js:

```bash
npm init -y

```

Isso cria um `package.json` com as configurações básicas.
### 3. Instale o TypeScript como dependência de desenvolvimento:

```bash
npm install typescript --save-dev

```

---

### 4. Gere o arquivo de configuração do TypeScript:

```bash
npx tsc --init

```

Isso cria um arquivo `tsconfig.json` com várias opções.
### 5. Crie a estrutura de pastas do projeto:

```bash
mkdir src

```

E dentro de `src`, você pode criar seu primeiro arquivo TypeScript, como `index.ts`.

### 6. Ajuste o tsconfig.json (opcional, mas recomendado):
Edite o arquivo tsconfig.json para ficar com as seguintes opções básicas:
```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### 7. Escreva o código do Hello World:
```
// src/index.ts

const mensagem: string = "Hello, World!";
console.log(mensagem);
```
### 8. Compile o projeto:

```bash
npx tsc

```

Isso vai compilar os arquivos `.ts` da pasta `src` e gerar `.js` na pasta `dist`

### 9. Execute o arquivo compilado com Node.js:
```
node dist/index.js
```
