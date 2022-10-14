#!/bin/bash

## Seção 1.Dia 1. Exercícios Parte 2 - Unix e Bash: manipulação e busca.

Exercise 01
mkdir unix_tests_search
cd unix_tests_search 

Exercise 02
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1842  100  1842    0     0   4214      0 --:--:-- --:--:-- --:--:--  4224

Exercise 03
cat countries.txt 
Afghanistan
Albania
Algeria
Andorra
Angola
Antigua & Deps
Argentina
Armenia
Australia
Austria
Azerbaijan
Bahamas
Bahrain
Bangladesh
Barbados
Belarus
Belgium
Belize
Benin
Bhutan
Bolivia
Bosnia Herzegovina
Botswana
Brazil
Brunei
Bulgaria
Burkina
Burundi
Cambodia
Cameroon
Canada
Cape Verde
Central African Rep
Chad
Chile
China
Colombia
Comoros
Congo
Congo {Democratic Rep}
Costa Rica
Croatia
Cuba
Cyprus
Czech Republic
Denmark
Djibouti
Dominica
Dominican Republic
East Timor
Ecuador
Egypt
El Salvador
Equatorial Guinea
Eritrea
Estonia
Ethiopia
Fiji
Finland
France
Gabon
Gambia
Georgia
Germany
Ghana
Greece
Grenada
Guatemala
Guinea
Guinea-Bissau
Guyana
Haiti
Honduras
Hungary
Iceland
India
Indonesia
Iran
Iraq
Ireland {Republic}
Israel
Italy
Ivory Coast
Jamaica
Japan
Jordan
Kazakhstan
Kenya
Kiribati
Korea North
Korea South
Kosovo
Kuwait
Kyrgyzstan
Laos
Latvia
Lebanon
Lesotho
Liberia
Libya
Liechtenstein
Lithuania
Luxembourg
Macedonia
Madagascar
Malawi
Malaysia
Maldives
Mali
Malta
Marshall Islands
Mauritania
Mauritius
Mexico
Micronesia
Moldova
Monaco
Mongolia
Montenegro
Morocco
Mozambique
Myanmar, {Burma}
Namibia
Nauru
Nepal
Netherlands
New Zealand
Nicaragua
Niger
Nigeria
Norway
Oman
Pakistan
Palau
Panama
Papua New Guinea
Paraguay
Peru
Philippines
Poland
Portugal
Qatar
Romania
Russian Federation
Rwanda
St Kitts & Nevis
St Lucia
Saint Vincent & the Grenadines
Samoa
San Marino
Sao Tome & Principe
Saudi Arabia
Senegal
Serbia
Seychelles
Sierra Leone
Singapore
Slovakia
Slovenia
Solomon Islands
Somalia
South Africa
South Sudan
Spain
Sri Lanka
Sudan
Suriname
Swaziland
Sweden
Switzerland
Syria
Taiwan
Tajikistan
Tanzania
Thailand
Togo
Tonga
Trinidad & Tobago
Tunisia
Turkey
Turkmenistan
Tuvalu
Uganda
Ukraine
United Arab Emirates
United Kingdom
United States
Uruguay
Uzbekistan
Vanuatu
Vatican City
Venezuela
Vietnam
Yemen
Zambia
Zimbabwe%

Exercise 04
less countries.txt 

[1]  + 4139 suspended  less countries.txt

Exercise 05
less countries.txt
/Zambia

[2]  + 4148 suspended  less countries.txt

Exercise 06
grep Brazil countries.txt 
Brazil

Exercise 07
grep -i brazil countries.txt 
Brazil

Exercise 08
cat >> phrases.txt
Primeira linha de código
Segunda linha de código
Terceira linha de código
Quarta linha de código
^Z
[4]  + 4199 suspended  cat >> phrases.txt

Exercise 09
grep -iv 'fox' phrases.txt 
Primeira linha de código
Segunda linha de código
Terceira linha de código
Quarta linha de código

Exercise 10
wc -w phrases.txt 
16 phrases.txt

Exercise 11
wc -l phrases.txt 
4 phrases.txt

Exercise 12
touch empty.tbt empty.pdf

Exercise 13
ls -l
total 8
-rw-rw-r-- 1 victoria victoria 1842 out 14 10:35 countries.txt
-rw-rw-r-- 1 victoria victoria    0 out 14 10:47 empty.pdf
-rw-rw-r-- 1 victoria victoria    0 out 14 10:47 empty.tbt
-rw-rw-r-- 1 victoria victoria  101 out 14 10:45 phrases.txt

Exercise 14
ls -l *txt
-rw-rw-r-- 1 victoria victoria 1842 out 14 10:35 countries.txt
-rw-rw-r-- 1 victoria victoria  101 out 14 10:45 phrases.txt

Exercise 15
ls -l *t?t
-rw-rw-r-- 1 victoria victoria 1842 out 14 10:35 countries.txt
-rw-rw-r-- 1 victoria victoria    0 out 14 10:47 empty.tbt
-rw-rw-r-- 1 victoria victoria  101 out 14 10:45 phrases.txt

Exercise 16
man ls



