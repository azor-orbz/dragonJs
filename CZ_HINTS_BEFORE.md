# NPM
- Existují dva typy závislostí - dependencies pro produkci a devDependencies pro vývoj
 - +optinalDependency
- Default je instalace local
- npm init --yes udělá prázdný package.json bez ptaní
- --save --save-dev jsou parametry které přidávají dependencies do package.json během instalace
- npm outdate zjistí které závislosti jsou outdated
- npm package nezbytně nutně nemusí být modul. Package je něco, co se dá naloadovat pomocí require
- npm ls -depth=0 - listuje depdendecies hloubky 0
- npm run-script vylistuje scripty pokud je bez parametru
- npm run-script env vylistuje proměnne prostředí, včetně node specific věcí
 
 # CORE
 - const - konstanty jsou až od EMCA6
 - rest parameter - parametr, který je naposledním místě s ...a a můžu k něm přistupovat jako k poli
 - desctruction je možné provést s default hodnotou
 - function* je generator funkce
 - http://es6-features.org/#ArrayElementFinding
 - IIFE (Immediately-Invoked Function Expression - definice funkce za kterou je , tudíž() se rovnou spustí
 - type of null je object, coz je bug
 - var is function scoped, let is block scoped
 - 'sss'.repeat() opakauje string
 - Symbol je primitivní typ
 - existuje operator in, ktery vraci true/false pokud ne/existuje vlastnos objektu ('name' in person) vrati true, vraci true i pro undefined property, i pro inherited property
 - hasOwnProperty vraci true/false, nehleda v inherited property
 
  # NODE
  - Timers je package ve kterém je volání setImmediate(), require není potřeba
  - url.hash poslední část url za #, tudíš něco pro angular atd.
  - url.host - jméno hosta i s portem aka seznam.cz:80, bez portu je to url.hostname
  - vstup z commandline se čte pomocí readline modulu + vytvoření intefrace pomocí readline.CreateInterface process.stdin/stdout
  - readline pracuje se streamy, takže můžu klidně jako input stream použít stream ze souboru
  - process object je globální, so (no require)
  - process.exit - když node končí a nelze s tím již nic udělat, pouze synchornní volání
  - process.beforeExit - když je node u konce (ne však neodchycené vyjímky), klidně asynchornní volání a konec lze ještě odvrátit
  -'process.uncaughtException - eventa když probulají errory, defaultní chovnání je trace+exit node, lze přepsat nicméně je lepší když se zde vyčistí resource, zavřou file handlery atd. 
  - cluster.fork() je funkce na to spustit to multithreadem
  - EventEmiter pořaduje balik, ktery se jmenuje events, so require('events')
  - Parsing Url požaduje require('url'), zparsovaný object se dá získat pomocí .parse nebo jako neový objet new Url
  - Assert testovani vyžaduje assert module
  - Assert vyhazuje ERR_ASSERATION - Asseration Error v případě nesplnění
  - po práci s adresářovou strukturou require('path')
  
  # REACT-JS
  
  # WEBPACK
  -Má 4 části - Input, Output, Loaders a Plugins
  -Konfigurace je pomocí web.config.js
  -
