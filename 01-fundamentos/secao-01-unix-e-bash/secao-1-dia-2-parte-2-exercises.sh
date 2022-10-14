#!/bin/bash

## Seção 1.Dia 2. Exercícios Parte 2 - Unix e Bash: Permissões.

01
mkdir unix_tests_permissions
cd unix_tests_permissions

02
ls -l

03
touch arquivo_teste.txt

04
chmod a+rw arquivo_teste.txt
ls -l

05
chmod a-w arquivo_teste.txt
ls -l

06
chmod 644 arquivo_teste.txt
ls -l
