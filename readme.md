Funkcionality
=============
[Timerr.net](http://timerr.net) je webová aplikace poskytující jednoduše použitelné
funkčnosti ohledně časování.

[Stopky](http://timerr.net/index.html) umožňují jednoduše měřit čas uplynutý od
jejich spuštění.
Uprostřed běhu je možné stopky pozastavit a následně pokračovat nebo stopky vynulovat.
Aplikace taktéž poskytuje možnost ukládání jednotlivých mezičasů.
 
[Časovač](http://timerr.net/timer.html) odpočítává předem stanovený časový interval, který
si uživatel může nastavit.
I u časovače lze odpočítávání pozastavit a později zase pokračovat, nebo časovač vrátit
do původního stavu před spuštěním.

[Budík](http://timerr.net/alarm.html) upozorní uživatele, až nastane jím stanovený čas.
Budík též ukazuje čas, který do jeho spuštění zbývá.

[Světové hodiny](http://timerr.net/clock) uživateli ukáží, jaký je právě čas ve zvolené
lokaci. Bez zvolení lokace ukazují čas tam, kde se právě nachází.

Pomocí [kontaktního formuláře](http://timerr.net/contact-us.html) může uživatel zanechat
zprávu, připomínku, nahlásit bug, nebo si jenom pokecat. Na stránce [about](http://timerr.net/about.html)
nalezne informace o aplikaci, jako jsou použité technologie či changelog.

Spuštění
========
Ke spuštění aplikace nejsou potřeba žádné další závislosti, vše co je potřeba je webový
prohlížeč. Stačí tedy kliknout na [index.html](./index.html) a hned je možné stopovat.
Pro některé funkčnosti (časové zóny, odeslání zprávy) je potřeba být připojen k internetu.

Live verze aplikace je dostupná na adrese [timerr.net](http://timerr.net).

Shrnutí
=======
Cíle práce
----------
Cílem této semestrální práce bylo vytvořit kolekci přehledných, slušně vypadajících a
jednoduše použitelných nástrojů pro časování. Kromě splnění požadavků semestrální práce
jsem měl i několik osobních cílů, kterých jsem chtěl při vypracování semestrální práce
dosáhnout. První cíl, který ovlivnil již samotný výběr tématu byl, aby vytvořená webová
aplikace měla nějaké reálné využití. Druhým cílem bylo, abych se naučil psát reálné
aplikace v Javascriptu, předtím jsem totiž sice rozuměl základním konstrukcím, nikdy jsem
ale v něm nedělal nic většího. Třetím osobním cílem bylo vyzkoušet si práci s CSS
preprocesorem – věc, ke které jsem se chtěl už dlouho dostat sám.

Splnění požadavků
-----------------
Jednotlivé požadavky semestrální práce jsem, pokud mi něco neuniklo, všechny splnil. Aplikace
je responzivní, obsahuje spoustu skriptů, které řeší interaktivitu, pomocí ajaxu se dotazuje
na data o časových zónách a posílá na server zprávy od uživatele. Součástí stránky jsou i
komponenty v Reactu, které řeší vykreslování tabulky s mezičasy, tabulka si udržuje a reaguje
na stav a předává data do dětské komponenty. Aplikace ukládá informace o posledních nastavených
hodnotách do localStorage a tyto hodnoty použije jako výchozí při příštím načtení. Taktéž by
aplikace měla splňovat požadavky z předchozích checkpointů.

Problémy a výzvy
----------------
Výzvou pro mě byly především tři věci. Jednak neztratit se v hromadě různých nástrojů, konfigurací
a podobně a zůstat soustředěný na to, co je cílem tohoto projektu. Zjistil jsem, že většinou je
lepší je prostě začít psát a později podle potřeby refaktorovat. Druhou výzvou bylo zorientovat
se v tom, jak přesně funguje časování v Javcascriptu a jak zajistit, aby zobrazovaný čas byl
stále přesný, aby se časy překreslovaly ve správný čas, aby timery bylo možné pozastavovat a
zase spouštět a tak dále. Třetí, celkem očekávanou výzvou byla kompatibilita prohlížečů.
V tomto ohledu mě překvapil Firefox, který například neumožňoval před čísla v číselném inputu
vložit nuly. Problém jsem vyřešil použitím textového inputu a naimplementováním vlastní logiky
pro input čísel.

Co jsem se naučil
-----------------
Celkově mě práce na úkolu celkem bavila a jsem s výsledkem spokojený a splnil jsem si
své osobní cíle. Naučil jsem se spoustu věcí ohledně Javascriptu a ES6, zkusil si práci s
preprocesorem Sass a snad bude aplikace i někomu užitečná. Jsem rád, že jsem narazil na
několik výzev při psaní js, díky kterým jsem si vše pořádně procvičil a posunul se zase o
kus dál. Velmi mne zaujala knihovna React, u které se mi líbí její skvělá a jednoduchá
architektura a fakt, že vývojáři nic nevnucuje a je možné ji použít jen tam, kde člověk
chce. Přemýšlím i o tom, že v Reactu později přepíšu celou aplikaci.

Budoucí vývoj
-------------
Rád bych i po odevzdání úkolu projekt ještě dále vylepšoval. Konkrétně mě napadá například:
naplnit stránku About reálným textem, přidat indikátory činnosti během komunikace se serverem,
každé z jednotlivých stránek přidat téma s unikátní barvou, přidat ovládání klávesovými
zkratkami, přednastavené a oblíbené časy u časovače, zvuky u budíku a další...

Použité technologie a zdroje
============================
Produkce
--------
- [React a ReactDom](https://reactjs.org/) – Komponenty pro zobrazování informací o mezičasech. 
- [Google Maps Timezone API](https://developers.google.com/maps/documentation/timezone)
  – Získávání informací o časových pásmech
- [Beeceptor](https://beeceptor.com/) – Mocking api pro posílání zpráv.
- [HTML5 Shiv](https://github.com/aFarkas/html5shiv) – Zobrazování HTML5 elementů v IE.
- [Respond.js](https://github.com/scottjehl/Respond) – Polyfill pro jednoduché media queries v IE.
- [REM unit polyfill](http://chuckcarpenter.github.io/REM-unit-polyfill/) – Polyfill jednotek `rem` v IE.
- [Vminpoly](https://github.com/saabi/vminpoly) – Polyfill pro jednotky `vh` pro IE.
- [PadStart polyfill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) – Polyfill pro podporu funkce `padStart`.
- [IANA Timezone database](https://www.iana.org/time-zones) - Informace o umístění jednotlivých časových zón.
- [Unicode Common Locale Data Repository](http://cldr.unicode.org/) – Seznam časových pásem
  podporovaných v Google Timezone API (odkaz na [seznam časových zón](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml)).

Veškeré soubory, které nejsou vlastní (knihovny, polyfilly apod.) se nachází ve složce [scripts/vendor](./js/vendor).

Vývoj
-----
- [Node.js](https://nodejs.org/) – Běhové prostředí pro Babel, YuiCompressor a Sass kompilátor.
- [Sass](https://sass-lang.com/) – Kompilace .scss souborů do klasického CSS
- [Babel](https://babeljs.io/) – Kompilace nových funkcí ES6.
- [YuiCompressor](http://yui.github.io/yuicompressor/) – Minifikace CSS souborů.
- [LiveReload](http://livereload.com/) – Live reload stránek pro pro pohodlnější vývoj.