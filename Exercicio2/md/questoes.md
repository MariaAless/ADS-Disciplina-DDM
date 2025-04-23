## Capitulo 2 

### **Questão 1 – Verificação de idade**

Crie um programa que receba uma variável `idade` e imprima:

- “Criança” se for menor que 12,
- “Adolescente” se estiver entre 12 e 17,
- “Adulto” se for 18 ou mais.

## **Questão 2 – Número par ou ímpar**
- Peça para o aluno criar um programa que verifique se um número é par ou ímpar, utilizando o operador ternário.
```
let numero = 7;
// Saída esperada: "Ímpar"
```
### **Questão 3 – Escolha de linguagem**

Usando `switch`, crie um programa que dado o número de uma linguagem imprima:

- 1 → "TypeScript"
- 2 → "JavaScript"
- 3 → "Python"
- qualquer outro valor → "Linguagem não cadastrada"

### **Questão 4 – Verificador de saldo**

Utilize o operador ternário para verificar uma variável `saldo`. Se for maior ou igual a zero, mostre “Saldo OK”; caso contrário, mostre “Saldo negativo”.

### **Questão 5 – Votação obrigatória**

Crie um programa que recebe a idade de uma pessoa e determina a obrigatoriedade do voto conforme as regras brasileiras:

- Menor de 16 → “Não vota”
- 16 ou 17, ou maior de 70 → “Voto facultativo”
- De 18 a 70 → “Voto obrigatório”

### **Questão 6 – Nota do aluno**

Com base em uma variável `nota` de 0 a 10, exiba:

- nota >= 7 → “Aprovado”
- nota entre 5 e 6.9 → “Recuperação”
- nota < 5 → “Reprovado”

### **Questão 7 – Sistema de Notas e Classificação Final**

Crie um programa que receba:

- **nome do aluno**
- três **notas (números de 0 a 10)**
- a **frequência** em porcentagem (de 0 a 100)

E com base nesses dados, faça:

1. Calcule a **média** das três notas.
2. Se a **frequência for menor que 75%**, o aluno estará **reprovado por falta**, independentemente da média.
3. Se a frequência for suficiente, aplique as seguintes regras:
    - Média >= 7: **Aprovado**
    - Média >= 5 e < 7: **Recuperação**
    - Média < 5: **Reprovado por nota**

## Capitulo 3

### **Questão 1 – Imprimindo números**

Utilize um laço `for` para imprimir os números de **1 a 10** no console.

### **Questão 2 – Soma de números pares**

Utilize um laço `while` para somar os **números pares entre 1 e 20** e exibir o resultado no console.
### **Questão 3 – Iterando sobre um array**

Crie um array com 5 nomes de cidades.

Use `for...of` para exibir no console:
```
"Visitando: <nome da cidade>"
```

# Questão 4 – Exibindo propriedades de um objeto 
Dado o objeto abaixo, use for...in para imprimir todas as propriedades no formato:
"<chave>: <valor>"

```
const aluno = {
  nome: "Maria",
  idade: 21,
  curso: "Análise e Desenvolvimento de Sistemas"
};
```

### **Questão 5 – Sistema de notas e aprovação**

Crie uma **função** chamada `verificarAprovacao` que recebe um **array de objetos** com nome e notas de alunos. Cada aluno tem 3 notas.

A função deve:

1. Calcular a **média** das notas de cada aluno.
2. Verificar se a média é **maior ou igual a 7**.
3. Exibir no console a seguinte mensagem para cada aluno:
```
<nome> - Média: <média> - Situação: Aprovado/Reprovado  
```
#### Exemplo de entrada:
```
const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carlos", notas: [7, 7, 7] }
];
```
#### Chamada:
```
verificarAprovacao(alunos);

```
#### Saída esperada:
```
Ana - Média: 8 - Situação: Aprovado
Bruno - Média: 5.33 - Situação: Reprovado
Carlos - Média: 7 - Situação: Aprovado
```