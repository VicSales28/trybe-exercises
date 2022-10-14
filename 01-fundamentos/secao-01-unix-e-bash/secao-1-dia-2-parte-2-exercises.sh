#!/bin/bash

## Seção 1.Dia 2. Exercícios Parte 2 - Unix e Bash: Permissões.

Exercise 01
mkdir unix_tests_permissions
cd unix_tests_permissions

Exercise 02
ls -l

Exercise 03
touch arquivo_teste.txt

Exercise 04
chmod a+rw arquivo_teste.txt
ls -l

Exercise 05
chmod a-w arquivo_teste.txt
ls -l

Exercise 06
chmod 644 arquivo_teste.txt
ls -l
