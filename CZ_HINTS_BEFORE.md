# NPM
- Existují dva typy závislostí - dependencies pro produkci a devDependencies pro vývoj
- Default je instalace local
- npm init --yes udělá prázdnž package.json bez ptaní
- --save --save-dev jsou parametry které přidávají dependencies do package.json během instalace
- npm outdate zjistí které závislosti jsou outdated
- npm package nezbytne nemusí být modul. Package je něco, co se dá naloadovat pomocí require
- npm ls -depth=0 - listuje depdendecies hloubky 0
 
 # CORE
 - const - konstanty jsou až od EMCA6
 - rest parameter - parametr, který je naposledním místě s ...a a můžu k něm přistupovat jako k poli
 - desctrucion je možné provést s default hodnotou
 - function* je generator funkce
 - http://es6-features.org/#ArrayElementFinding
 - IIFE (Immediately-Invoked Function Expression - definice funkce za kterou je , tudíž() se rovnou spustí
 - type of null je object, coz je bug
 - var is function scoped, let is block scoped
 - 'sss'.repeat() opkauje string
 - Symbol je primitivní typ