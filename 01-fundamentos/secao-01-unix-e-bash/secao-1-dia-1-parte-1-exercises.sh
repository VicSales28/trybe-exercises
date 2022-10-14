#!/bin/bash

## Seção 1.Dia 1. Exercícios Parte 1 - Unix e Bash: criação de arquivos e diretórios.
Exercise 01
mkdir unix_tests
cd unix_testes

Exercise 02
touch trybe.txt

Exercise 03
cp trybe.txt trybe_backup.txt

Exercise 04
mv trybe.txt trybe-renomeado.txt

Exercise 05
mkdir backup

Exercise 06
mv trybe_backup.txt backup

Exercise 07
mkdir backup2

Exercise 08
mv backup/trybe_backup.txt backup2

Exercise 09
rmdir backup

Exercise 10
mv backup2 backup

Exercise 11
pwd
ls -l .

Exercise 12
rm -rd backup

Exercise 13
cat >> skills.txt
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

Exercise 14
head -n 5 skills.txt

Exercise 15
tail -n 4 skills.txt

Exercise 16
rm *.txt
