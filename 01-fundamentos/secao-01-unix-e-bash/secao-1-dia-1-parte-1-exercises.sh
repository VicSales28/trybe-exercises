#!/bin/bash

## Seção 1.Dia 1. Exercícios Parte 1 - Unix e Bash: criação de arquivos e diretórios.
01
mkdir unix_tests
cd unix_testes

02
touch trybe.txt

03
cp trybe.txt trybe_backup.txt

04
mv trybe.txt trybe-renomeado.txt

05
mkdir backup

06
mv trybe_backup.txt backup

07
mkdir backup2

08
mv backup/trybe_backup.txt backup2

09
rmdir backup

10
mv backup2 backup

11
pwd
ls -l .

12
rm -rd backup

13
cat >> skills.txt
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

14
head -n 5 skills.txt

15
tail -n 4 skills.txt

16
rm *.txt
