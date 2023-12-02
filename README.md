# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
## Modo de uso
Para usar o codigo, se é necessario clonar o repositorio usando o seguinte comando:
~~~ 
git clone https://github.com/abimael-libaino/dio-desafio1.git 
~~~
Depois, se é necessaria a instalação do modulo ```prompt-sync``` que se faz com o seguinte comnado sendo usado no terminal (se tiver node.js instalado):
~~~
npm install prompt-sync 
~~~
e depois de clonado, entrar na pasta e usar o seguinte comando:
~~~
node desafio1.js
~~~
Lembrando que tem que modificar os valores das variaveis dentro do arquivo .js preenchendo xp com o numero de pontos de experiencia e nome com o nome do heroi.