#!/bin/bash

## Seção 1.Dia 2. Exercícios Parte 1 - Unix e Bash: comandos de input e output.

01
mkdir unix_tests_skills
cd unix_tests_skills

02
cat >> skills2.txt
Internet
Unix
Bash

03
echo "Trybe" >> skills2.txt
echo "Gotrybe" >> skills2.txt
echo "Git" >> skills2.txt
echo "GitHub" >> skills2.txt
echo "HTML" >> skills2.txt
sort < skills2.txt

04
wc -l skills2.txt

05
sort < skills2.txt | head -n 3 > top_skills.txt

06
cat >> phrases2.txt
Primeira linha de código
Segunda linha de código
Terceira linha de código

07
grep br phrases2.txt | wc -l

08
grep -v br phrases2.txt | wc -l

09
echo "Argentina" >> phrases2.txt
echo "Paraguai" >> phrases2.txt

10
cat phrases2.txt countries.txt >> bunch_of_things.txt

11
sort -o bunch_of_things.txt bunch_of_things.txt

