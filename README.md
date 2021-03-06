﻿# [cry 2](https://cry2-web.herokuapp.com/)

**cry 2** se refere a uma cifra que criei para aprender algumas funções do Javascript e alguns conceitos de criptografia.

## Como funciona?

Pode-se dizer que **cry 2** é uma **criptografia de chave simétrica**, isto é, um método que necessita de um **texto original** e uma **chave**, sendo o primeiro um texto qualquer que será criptografado e o segundo um conjunto de caracteres que será utilizado para cifrar e decifrar o **texto original**. Cada informação para a cifragem é solicitada no formulário disponível em [cry2-web.herokuapp.com](https://cry2-web.herokuapp.com/).

É possível observar nas [linhas 5 e 6 do arquivo ```source.js```](https://github.com/Niaev/cry2-web/blob/master/src/js/source.js#L5) o seguinte trecho de código:

```javascript
// banco de caracteres
var alfanum = 'abcdefghijklmnopqrstuvwxyzáàãâéèêíìîóòõôúùûçABCDEFGHIJKLMNOPQRSTUVWXYZÁÀÃÂÉÈÊÍÌÎÓÒÕÔÚÙÛÇ !\"#$%&\'()*+,-./:;<=>?';
```

A variável ```alfanum```, citada no trecho de código acima, é uma string que contém todos os caracteres que podem ser utilizados no **texto original** e na **chave**. Pois é, números não são bem-vindos aqui, mas eu já explico o motivo.

Ao clicar em ```Encript.```, o **texto original** e a **chave** tem seus caracteres separados um a um e são comparados aos caracteres da variável ```alfanum```, assim recebem o índice correspondente ao caractere equivalente presente nessa variável.

| Texto original | Chave |
| -------------- | ----- |
| Olá, mundo | chave |

**Texto original**

| O | l | á | , |   | m | u | n | d | o |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 58 | 11 | 26 | 100 | 88 | 12 | 20 | 13 | 3 | 14 | 

**Chave**

| c | h | a | v | e |
| --- | --- | --- | --- | --- |
| 2 | 7 | 0 | 21 | 4 | 

Essas sequencias de números são transformadas em *arrays*:

| Texto original | Chave |
| -------------- | ----- |
| [ 58, 11, 26, 100, 88, 12, 20, 13, 3, 14 ] | [ 2, 7, 0, 21, 4 ] |

Então essas *arrays* são combinadas pela operação XOR (em javascript representada pelo operador ```^```), letra por letra. Nesse caso, a **chave** é menor que o **texto original**, então ela se repete o número de vezes suficiente para criptografar toda a mensagem:

| 58 | 11 | 26 | 100 | 88 | 12 | 20 | 13 | 3 | 14 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | 7 | 0 | 21 | 4 | 2 | 7 | 0 | 21 | 4 |

Resultado:

| 56 | 12 | 26 | 113 | 92 | 14 | 19 | 13 | 22 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

Os novos números gerados são transformados em caracteres de acordo com os índices correspondentes na variável ```alfanum```. Repare que a variável ```alfanum``` tem 110 caracteres, isto é, o seu último caractere tem índice ```109``` e que o quarto número do resultado acima é ```113```, maior que o maior índice dentro de ```alfanum```.
Nesse caso, ```113``` não será transformado em caractere, no texto final ficará representado dessa forma. Então, temos o **texto cifrado**, resultado final da cifragem:

| 56 | 12 | 26 | 113 | 92 | 14 | 19 | 13 | 22 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M | m | á | 113 | $ | o | t | n | w | k |

| Texto cifrado |
| ------------- |
| Mmá113$otnwk |

O processo reverso, de decifragem, efetuado ao clicar em ```Decript.```, solicita um **texto cifrado** e uma **chave**, tendo como resultado o **texto original**. O método de cifragem e de decifragem são quase iguais, tendo como diferença, na decifragem, o algoritmo que detecta um número no **texto cifrado**, já que só aparecerão números maiores que 109, todos os números estarão apresentados em trios, esse algoritmo detecta os próximos dois números, formando um trio na hora de decifrar, sendo esse trio, transformado em somente um caractere ao final do processo de decifragem. Eis aqui o motivo para não permitir números nessa criptografia.

## Faça bom uso :)