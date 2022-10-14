## Seção 1.Dia 1. Exercícios Parte 1 - Unix e Bash: criação de arquivos e diretórios.

01 - Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.

02 - Crie um arquivo de texto com o nome trybe.txt.

03 - Crie uma cópia do arquivo trybe.txt com o nome trybe_backup.txt.

04 - Renomeie o arquivo trybe.txt.

05 - Dentro de unix_tests, crie um novo diretório chamado backup.

06 - Mova o arquivo trybe_backup.txt para o diretório backup.

07 - Dentro de unix_tests, crie um novo diretório chamado backup2.

08 - Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.

09 - Apague a pasta backup.

10 - Renomeie a pasta backup2 para backup.

11 - Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.

12 - Apague o diretório backup.

13 - Crie um arquivo de texto com o conteúdo abaixo, chamado skills.txt:
- Internet
- Unix
- Bash
- HTML
- CSS
- JavaScript
- React
- SQL

14 - Mostre na tela as 5 primeiras skills do arquivo skills.txt.

15 - Mostre na tela as 4 últimas skills do arquivo skills.txt.

16 - Apague todos os arquivos que terminem em .txt.

## Seção 1.Dia 1. Exercícios Parte 2 - Unix e Bash: manipulação e busca.

01 - Crie um novo diretório chamado unix_tests_search e entre nele. 

02 - Na pasta unix_tests_search, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

03 - Mostre todo o conteúdo do arquivo countries.txt na tela.

04 - Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.

05 - Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.

06 - Busque por Brazil no countries.txt.

07 - Busque novamente por brazil, mas agora utilizando o lower case.

08 - Crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha.

09 - Busque pelas frases que não contenham a palavra fox.

10 - Conte o número de palavras do arquivo phrases.txt.

11 - Conte o número de linhas do arquivo phrases.txt.

12 - Crie os arquivos empty.tbt e empty.pdf.

13 - Liste todos os arquivos do diretório unix_tests_search.

14 - Liste todos os arquivos que terminem com txt.

15 - Liste todos os arquivos que terminem com tbt ou txt.

16 - Acesse o manual do comando ls.

## Seção 1.Dia 2. Exercícios Parte 1 - Unix e Bash: comandos de input e output.

01 - Crie a pasta unix_tests_skills e navegue até ela.

02 - Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.

03 - Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal.

04 - Conte quantas linhas tem o arquivo skills2.txt.

05 - Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.

06 - Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

07 - Conte o número de linhas que contêm as letras br.

08 - Conte o número de linhas que não contêm as letras br.

09 - Adicione dois nomes de países ao final do arquivo phrases2.txt.

10 - Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

11 - Ordene o arquivo bunch_of_things.txt.

## Seção 1.Dia 2. Exercícios Parte 2 - Unix e Bash: Permissões.


01 - Crie a pasta unix_tests_permissions e navegue até ela.

02 - Rode o comando ls -l e veja quais as permissões dos arquivos.

03 - Crie o arquivo arquivo_teste.txt.

04 - Mude a permissão do arquivo arquivo_teste.txt para que todas as pessoas usuárias possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;
Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt

05 - Tire a permissão de escrita do arquivo arquivo_teste.txt para todas as pessoas usuárias, verifique se está correto com o comando ls -l;
Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt

06 - Volte à permissão do arquivo arquivo_teste.txt para a listada inicialmente utilizando o comando chmod 644 arquivo_teste.txt.
Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 arquivo_teste.txt

## Seção 1.Dia 2. Exercícios Parte 3 - Unix e Bash: Processos & Jobs.

01 - Liste todos os processos.

02 - Agora use o comando sleep 30 &.

03 - Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução.

04 - Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background.

05 - Crie um processo em background que rode o comando sleep por 300 segundos.

06 - Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.

07 - Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.

08 - Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.

09 - Você vai precisar trazer o processo para foreground (fg) e suspendê-lo (ctrl+z), ou enviar um sinal.

10 - Retome a execução do processo sleep 100 em background com o comando bg.

11 - Termine a execução de todos os processos sleep.
