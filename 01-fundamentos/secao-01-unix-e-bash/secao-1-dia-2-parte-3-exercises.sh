#!/bin/bash

## Seção 1.Dia 2. Exercícios Parte 3 - Unix e Bash: Processos & Jobs.

Exercise 01
ps

Exercise 02
sleep 30 &

Exercise 03
ps
    PID TTY          TIME CMD
   4746 pts/0    00:00:00 zsh
   4774 pts/0    00:00:00 sleep
   4778 pts/0    00:00:00 ps
kill 4774
[1]  + 4774 terminated  sleep 30

Exercise 04
sleep 30
^Z
[1]  + 4792 suspended  sleep 30
bg
[1]  + 4792 continued  sleep 30
[1]  + 4792 done       sleep 30

Exercise 05
sleep 300 &

Exercise 06 e 07
sleep 200
^Z
[2]  + 5049 suspended  sleep 200
sleep 100
^Z
[3]  + 5053 suspended  sleep 100
 
Exercise 08 e 09
jobs
[1]    running    sleep 300
[2]  - suspended  sleep 200
[3]  + suspended  sleep 100
fg %1
[1]    5045 running    sleep 300
^Z
[1]  + 5045 suspended  sleep 300

Exercise 10
bg %3
[3]  - 5193 continued  sleep 100
jobs
[3]  + running    sleep 100

[3]  + 5193 done       sleep 100

Exercise 11
killall sleep



