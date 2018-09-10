# CRY 2.0 - [Niaev.github.io](https://niaev.github.io/)

CRY 2.0 se refere a uma cifra que eu criei - que está longe de ser usual e perfeita - somente para fins de lógicos de apredizado.

## Como funciona?

Essa cifra consiste na solicitação de uma mensagem e uma chave, tanto para cifrar quanto para decifrar. No código fonte é possível encontrar uma variável chamada ```alfanum``` que possui todos os caracteres suportados pela CRY 2.0.

O código em Javascript transforma cada caractere da mensagem e da chave em um número decimal correspondente ao seu índice na variável ```alfanum```, depois cria um padrão de repetição da chave para cifrar todos os caracteres da mensagem, levando a chave a ter a mesma quantidade de caracteres que a mensagem.

É realizada uma operação XOR (```^```) entre os números decimais dos caracteres da mensagem com os da chave, resultando em números completamente diferentes dos iniciais (a princípio).

Por fim, os números decimais são transformados em caracteres de acordo com seus valores na variável ```alfanum```, tendo como resultado a mensagem cifrada.

A decifragem consiste em um processo de mesma lógica com pequenas coisas de diferença. Para decifrar a sua mensagem, basta inserí-la no campo de decifragem com e mesma chave utilizada para cifrar, tendo como resultado a mensagem inicial.

## Por que não pode ser usual?

O operador XOR (```^```, já citado anteriormente) é um operador ótimo para garantir a segurança da mensagem criptografada, mas utilizando ele com uma banco de caracteres limitados (```alfanum```) há um certo problema.

Nosso banco de caracteres tem um limite. Ele possui 110 caracteres. O último caractere corresponde ao número 109. Se o resultado da operação XOR for maior que 109, o código não irá encontrar caractere correspondente a esse resultado.

Então, nesses casos, é exibida uma sequência de três algarismos, sempre maior que 109, e foi programado para que o sistema procure um número na mensagem criptografada, se ele encontrar, é porque devem existir mais dois o sucedendo, formando um número de três dígitos, que serão analisados em conjunto na decifragem, tendo como resultado um único caractere.

Para isso, a mensagem que será cifrada não pode possuir números, sendo assim, uma cifra "furada".

## Por que não transformá-la em usual?

Eu gostaria e estou trabalhando nisso. No momento estou sem tempo. Mesmo com esse problema com números, ela funciona. E funciona bem, não é lá um grave problema. O maior problema é não poder utilizá-la para criptografar informações, já que não interpreta números na crifragem, sendo assim uma cifra para trocar mensagens ou somente para o meu (ou o seu) aprendizado.

## Por que "2.0"?

A primeira versão (seria a "1.0"?) foi feita em papel, somente com letras maiúsculas, sem acentuação, somente com pontuações básicas e espaçamento, o que não passava de uns 40 ou 50 caracteres. Fiz para ver se a minha ideia inicial funcionava. Bem funcionou e não funcionou. Acho que já expliquei o motivo.

Essa versão (2.0) é automatizada - como eu disse, a outra foi feita em papel, então eu fazia os cálculos na mão, o que resultava em alguns erros que forneciam mensagens sem sentido - e com uma maior gama de caracteres, aumentando a "força" dessa "criptografia".

## Conclusões...

 - Eu não sei criar um método matemático eficiente para criptografar informação (ainda).
 
 - Um dia (talvez bem distante) eu vou fazer algo que funcione.
 
 - NUNCA utilize esse método para coisas importantes que envolvem vidas e dinheiro. Fora isso, faça o que quiser.
