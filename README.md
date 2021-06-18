# Machtigingprocess
Machtigingprocess van het Centraal Machtigingen Register voor Novum

Welkom bij de Github van het prototype voor het machtigingenproces van het Centraal Machtigingen Register voor Novum.

Intro:
Dit prototype vraagt in een webformulier gegevens om een machtiging aan te maken. Hierna wordt er van deze gegevens een pdf opgeslagen.
Daarbij is er gelet om te werken met:
- Kleine lichte bestanden om performance te verbeteren
- Toepassing van WAI-ARIA labels en functionaliteit om het prototype geschikt te maken voor screenreaders
- Moderne html termen voor betere seo resultateen Google
- Informatievlakken en heldere uitleg om prototype geschikter te maken voor elke doelgroep

Toepassing:
Open de index.html binnen een browser. Hier kan het machtigingprocess worden gedaan door het formulier in te vullen. Vul elk vlak in en klik op genereer pdf. 

Uitleg bestanden:
Er wordt gebruik gemaakt van een modulebundler genaamd Webpack. Deze zet allerlei bestanden naar één bestand om en bied nuttige nevenfuncties voor ontwikkeling. 
Het prototype kan ook zonder Webpack, en ook zonder Sass, worden gebruikt door de index.html en de dist folder naar een aparte folder te kopieëren. Hierna moeten bestandsverwijzigingen worden gecontroleerd en eventueel de sass verwijzigingen naar css worden omgezet.
•	.git: bestanden voor git, niet aanpassen
•	dist: alle resources die door het webpack systeem zijn omgezet naar bruikbare bestanden voor webtoepassing
•	Node_modules: alle programma’tjes die worden gebruikt voor de ontwikkeling, niet aanpassen
•	src: hier bevinden zich alle resources voor het prototype die worden gebruikt voor het ontwikkelproces
o	fonts: fonts voor het prototype
o	img: afbeeldingen voor het prototype
o	js: de scriptcode om menu’s, animaties en het pdf genereren te laten werken
o	sass: de stijlingcode volgens sass methodiek
•	.gitignore: de bestanden die 
index.html: de hoofd webpagina met het formulier en de teksten
•	package.json: de programma’s, scripts en informatie voor het ontwikkelprocess is hier benoemd
•	package-lock.json: veiligheidsbestand voor package.json van het systeem, niets aanpassen
•	webpack-mix.js: bestand om aanpassingen binnen webpack te maken
