#!/bin/bash

## Seção 2.Dia 1. Exercícios - Git: criando um repositório.

Exercise 01
mkdir pasta-teste-git

Exercise 02
cd pasta-teste-git

Exercise 03
git init

Exercise 04
code .

Exercise 05
touch README.md

Exercise 06
git add README.md
git commit -m "Criação de README.md"

Exercise 07
git checkout -b edicao-readme

Exercise 08
cat >> README.md
Arquivo teste criado para realização dos exercícios da Trybe

git checkout main
git merge edicao-readme

Exercise 09
git checkout -b atualiza-readme

Exercise 10
touch infos.txt

Exercise 11
git add .
git commit m- "Criação de infos.txt"

Exercise 12
cat >> infos.txt
Victoria
Sales Matos

Exercise 13
git add .
git commit m- "Atualização de infos.txt"

Exercise 14
git checkout atualiza-readme
git checkout -b adiciona-infos

Exercise 15
git checkout adiciona-infos
cat >> README.md
O primeiro passo é ter uma pasta versionada localmente, fazemos isso utilizando o comando git init. O segundo passo é criar uma branch nova, ao criar com o comando git checkout -b nome-da-branch, já é possível ter acesso a nova branch de maneira imediata.

Exercise 16
git add .
git commit m- "Atualização de README.mdt"

Exercise 17
git checkout atualiza-readme
git merge adiciona-infos

Exercise 18
git checkout main
git merge atualiza-readme

