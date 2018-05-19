# Zadání: 
Důležitá součást projektu je soubor README.md, kde popište, jak se vaše aplikace
spustí a jaké má funkcionality. Také v něm napiště závěrečnou zprávu, ve které
popíšete, jaký byl Váš prvotní záměr, jak jste splnili jednotlivé požadavky
semestrální práce, jaké jste řešili při vývoji problémy atd. Zpráva by něměla
být delší než jedna A4.

Pokud máte nějaký vlastní backend, tak někam prosím aplikaci nahrajte (například
na Heroku), aby bylo možné ji otestovat. Pokud je potřeba se do Vaší aplikace
nějak přihlásit popiště to v README.md

Do README.md také uvěďte, které soubory jsou Vaše vlastní a které jsou součástí
již existujícího framworku/knihovny. Pokud jste odněkud převzali kód, označte
to komentářem nad danou částí přímo v souboru.

Pokud používáte balíčkovací system npm, neodevzdávejte soubory ve složce
node_modules. Všechny závislosti (i na balíčcích, které máte nainstalované
lokálně) uveďte do souboru package.json.

Pokud používáte jiný balíčkovací system, vytvořte spustitelnou verzi vašeho
projektu tak, aby nebylo potřeba projekt kompilovat.

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
prvotní záměr, splnění požadavků, problémy při vývoji, ..., další rozvoj

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